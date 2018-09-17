import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Redirect } from 'react-router-dom';
import { createPost, fetchPost } from '../../actions/post_actions';
// import { openSearchSelected, closeTabs } from '../../actions/ui_actions';
import { searchUsers } from '../../actions/user_actions';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image_url: 'fakeurl',
      photo: null,
      matchingResults: []
    };
  }

  componentWillReceiveProps(){
    this.setState({
      matchingResults: this.props.searchResults
    });
  }

  handleSearch(e){
    this.props.searchUsers(e.target.value);
  }





  updateExploreProps(){

  }

  updateFansProps(){

  }

  updateFile(e){
    this.setState({photo: e.target.files[0]}, ()=>{
      document.getElementsByClassName('post-submit-button')[0].click();
    });
  }

  postSubmit(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append('post[image_url]', this.state.image_url);
    formData.append('post[photo]', this.state.photo);
    this.props.createPost(formData).then(post => this.props.fetchPost(post.id));
  }


  //for now after click just go to home page, later we ar egoing to change that to ' go to page with the post of following people'
  goHomePage(){
    this.props.history.push('/homepage');
  }

  GoToUserPage(){
    this.props.history.push(`/homepage/${this.props.currentUser.username}/${this.props.currentUser.id}`);
  }

  AddNewPost(){
    document.getElementsByClassName('newpost-input')[0].click();
  }

  render(){
    let result_items;
    if(this.props.searchResults.length !== 0){
      result_items = this.props.searchResults.map((user,idx) => {
        return (
          <li key={idx}>
            <img src={user.photo_image_url}/>
            <span>{user.username}</span>
          </li>
        )
      })
    }

      return (
        <section className='nav_bar'>
          <div className='logo-and-ig' onClick={this.goHomePage.bind(this)}>
            <li className='logo'>
              <img src={window.logoIns} />
            </li>
            <li className='ig'>Instagraph</li>
          </div>
          <div className="search-bar">
            <img src={window.searchImg} />
            <input type="text" onChange={this.handleSearch.bind(this)} placeholder='search'/>
            <div className={`result_items `} >
              {result_items}
            </div>
          </div>
          <div className='support-icons'>
            <form onSubmit={this.postSubmit.bind(this)} hidden>
              <input className='newpost-input' type='file' accept='.gif, .jpg, .jpeg, .png' hidden onChange={this.updateFile.bind(this)} ></input>
              <button className='post-submit-button' hidden></button>
            </form>
            <a className='explore' onClick={this.updateExploreProps.bind(this)}><img src={window.navigationImg} /></a>
            <a className='fans' onClick={this.updateFansProps.bind(this)}><img src={window.likeImg} /></a>
            <a className='go_userpage' onClick={this.GoToUserPage.bind(this)}><img src={window.userImg} /></a>
            <a className='add-post' onClick={this.AddNewPost.bind(this)}><img src={window.addImg} /></a>
          </div>
        </section>
      );
  }

};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
    loggedIn: !!state.session.currentUserId,
    searchResults: state.entities.userSearch
  }
}


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  createPost: (post) => dispatch(createPost(post)),
  // open_search: () => dispatch(openSearchSelected()),
  // closeTabs: () => dispatch(closeTabs()),
  searchUsers: (query) => dispatch(searchUsers(query)),
  fetchPost: (id) => dispatch(fetchPost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
