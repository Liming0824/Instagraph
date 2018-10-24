import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Redirect } from 'react-router-dom';
import { createPost, fetchPost } from '../../actions/post_actions';
import { receiveFollow, ListenFollow, removeFollow, ListenUnfollow } from '../../actions/follow_actions';
import { searchUsers} from '../../actions/user_actions';
import { openPostDropdown, toggleNoticeDropdown } from '../../actions/modal_actions';
import PostDropdownContainer from '../post_dropdown/post_dropdown';
import NoticeDropdown from '../notices/notice_dropdown';




class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      matchingResults: []
    };
  }

  componentDidMount(){
    const { currentUser, receiveFollow } = this.props;
    ListenFollow(currentUser.id, this.props.receiveFollow, this.props.removeFollow);
  }

  componentWillReceiveProps(){
    this.setState({
      matchingResults: this.props.searchResults
    });
  }

  handleSearch(query){
    this.props.searchUsers(query);
  }

  updateInputValue(e){
    this.setState({
      inputValue: e.target.value
    });
    this.handleSearch.bind(this)(e.target.value);
  }

  // updateExploreProps(){
  //
  // }

  updateNoticeProps(){
    this.props.toggleNoticeDropdown();
  }

  handleTitleClick(user){
    this.setState({inputValue: ''});
    this.props.history.push(`/homepage/${user.username}/${user.id}`);
  }

  //for now after click just go to home page, later we ar egoing to change that to ' go to page with the post of following people'
  goHomePage(){
    this.props.history.push('/homepage');
  }

  GoToUserPage(){
    this.props.history.push(`/homepage/${this.props.currentUser.username}/${this.props.currentUser.id}`);
  }


  render(){
    let result_items;
    if(this.props.searchResults.length !== 0){
      result_items = this.props.searchResults.map((user,idx) => {
        return (
          <li key={idx} onClick={this.handleTitleClick.bind(this,user)}>
            <img src={user.photo_image_url}/>
            <span>{user.username}</span>
          </li>
        )
      })
    }else{
      result_items = (
        <li className='no-matchingResults'>
          <span> no matching results </span>
        </li>
      )
    }

    let show_status = this.state.inputValue === '' ? "hidden" : ''
    const length = this.props.currentUser.follower_records.filter(rec => rec.noticed === false).length;
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
            <input type="text" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} placeholder='search'/>
            {result_items !== undefined ?
              <div className={`search_items ${show_status}`} >
                {result_items}
              </div>  :
              null
            }
            <PostDropdownContainer />
          </div>
          <div className='support-icons'>
            <a className='fans' onClick={this.updateNoticeProps.bind(this)}><img src={length === 0 ? window.likeImg : window.redlikeImg} /></a>
            <a className='go_userpage' onClick={this.GoToUserPage.bind(this)}><img src={window.userImg} /></a>
            <a className='add-post' onClick={this.props.openDropdown}><img src={window.addImg} /></a>
            <NoticeDropdown />
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
  fetchUsers: () => dispatch(fetchUsers()),
  receiveFollow: (follow) => dispatch(receiveFollow(follow)),
  removeFollow: (follow) => dispatch(removeFollow(follow)),
  logout: () => dispatch(logout()),
  createPost: (post) => dispatch(createPost(post)),
  searchUsers: (query) => dispatch(searchUsers(query)),
  fetchPost: (id) => dispatch(fetchPost(id)),
  openDropdown: () => dispatch(openPostDropdown()),
  toggleNoticeDropdown: () => dispatch(toggleNoticeDropdown()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
