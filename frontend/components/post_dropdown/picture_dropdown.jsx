import React from 'react';
import { connect } from 'react-redux';
import { closePictureDropdown } from '../../actions/modal_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';



class PictureDropdown extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      commentValue: '',
      liked: false
    };
  }


  componentDidUpdate(preProps){
    if(this.props.post && (preProps.post === null || preProps.post.likes.length !== this.props.post.likes.length)){
      this.setState({
        liked: this.props.post.likes.includes(this.props.currentUserId)
      });
    };
  }




  //
  // handleLike(){
  //   debugger
  //   if(this.props.post.likes.includes(this.props.currentUserId)){
  //     this.props.deleteLike(this.props.post.id);
  //   }else{
  //     debugger
  //     this.props.createLike(this.props.post.id);
  //   }
  // }

  // handleCommentImg(){
  //   document.getElementsByClassName(`picture-comment-input-bar-${this.props.post ? this.props.post.id : ''}`)[0].focus();
  // }
  //
  // handleSubmitComment(e){
  //   e.preventDefault();
  //   debugger
  //   this.props.createComment({post_id: this.props.post.id, body: this.state.commentValue});
  //   this.setState({
  //     commentValue: ''
  //   });
  // }
  //
  // updateComment(e){
  //   this.setState({
  //     commentValue: e.target.value
  //   });
  // }


  render() {
    const pic_status = this.props.status ? '' : 'hidden';
    return(
      <div className={`picture-dropdown-parent ${pic_status}`} onClick={this.props.closePictureDropdown}>
        <div className='picture-dropdown-child' onClick={e => e.stopPropagation()}>
          <div className='pic-container'>
            <img src={this.props.post ? this.props.post.photo_image_url : null} />
            <span>By {this.props.author.username}</span>
          </div>

        </div>
      </div>
    )
  }

}



const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUserId,
    status: state.ui.picture_dropdown,
    post: state.ui.post,
    // likes: state.ui.post.likes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closePictureDropdown: () => dispatch(closePictureDropdown()),
    // createLike: (post_id) => dispatch(createLike(post_id)),
    // createComment: (comment) => dispatch(createComment(comment)),
    // deleteLike: (post_id) => dispatch(deleteLike(post_id))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureDropdown);

    // let liked = this.props.post ? this.props.post.likes.includes(this.props.currentUserId) : null



//should be inside render
    // <div className='picture-icons'>
    //   <a className="picture-like" onClick={this.handleLike.bind(this)}><img src={liked ? window.redlikeImg : window.likeImg}/></a>
    //   <a className="picture-comment" onClick={this.handleCommentImg.bind(this)}><img src={window.commentImg}/></a>
    // </div>
    // <div className="picture-comments-container">
    //     {items}
    // </div>
    //
    // <footer>
    //   <form onSubmit={this.handleSubmitComment.bind(this)}>
    //     <input required
    //       className={`picture-comment-input-bar-${ this.props.post ? this.props.post.id : ''}`}
    //       type="text"
    //       value={this.state.commentValue}
    //       onChange={this.updateComment.bind(this)}
    //       placeholder='Add a comment'
    //       />
    //     <input type="submit" hidden/>
    //   </form>
    // </footer>



  // should be poster name, in render
  // <ul>
    // <li>
    //   <img src={this.props.author.photo_image_url}/>
    // </li>
  // </ul>


// should be over all comments
  // <div className="com-container">
  //
  //
  // </div>
