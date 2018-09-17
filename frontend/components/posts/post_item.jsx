import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { createLike, deleteLike } from '../../actions/like_actions';
import { fetchPost } from '../../actions/post_actions';

class PostItem extends React.Component {
  constructor(props){
    super(props);
  }

  handleAuthorClick(){
    this.props.history.push(`/homepage/${this.props.user.username}/${this.props.user.id}`);
  }

  handleLike(){
    if(this.props.liked){
      this.props.deleteLike(this.props.post.id);
    }
    else{
      this.props.createLike(this.props.post.id);
    }
  }

  handleComment(){

  }


  handleShare(){

  }

  handleTag(){

  }



  render(){
    // need to be implement later on, create comment table, and fetch all comments in post controller and post index jbuilder
    // also need change routes, comment model, comment controller, ajax, action, reducer fro create new comments and then dispatch
    // const items = this.props.post.comments.map(comment => <CommentContainer />)
    //
    return (
      <div className="post-top-comment">
        <ul className="post-top">
          <div className="post-author-img" onClick={this.handleAuthorClick.bind(this)}>
            <img src={this.props.user.photo_image_url} />
          </div>
          <div className="post-author-name">
            <p>{this.props.user.username}</p>
          </div>
        </ul>
        <ul className="post-item-box">
          <img src={this.props.post.photo_image_url} />
        </ul>
        <ul className="comment">
          <div className="comment-icons">
            <a className={"comment-like"} onClick={this.handleLike.bind(this)}><img src={this.props.liked ? window.redlikeImg : window.likeImg}/></a>
            <a className="comment-write" onClick={this.handleComment.bind(this)}><img src={window.commentImg}/></a>
            <a className="comment-share" onClick={this.handleShare.bind(this)}><img src={window.shareImg}/></a>
            <a className="comment-flag" onClick={this.handleTag.bind(this)}><img src={window.tagImg}/></a>
          </div>
          <div className="likes-count">{this.props.post.likes.length} likes</div>
          <div className="comment-content">
            <li>here should be a comment</li>
            <li>another comment</li>
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  debugger
  return{
    user: state.entities.users[ownProps.post.posterId],
    liked: ownProps.post.likes.includes(state.session.currentUserId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createLike: (post_id) => dispatch(createLike(post_id)),
    deleteLike: (post_id) => dispatch(deleteLike(post_id))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostItem));
//here photo_image_url is in aws, if use 'image_url' then should be database local image
