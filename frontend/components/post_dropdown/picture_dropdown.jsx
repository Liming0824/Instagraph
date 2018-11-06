import React from 'react';
import { connect } from 'react-redux';
import { closePictureDropdown } from '../../actions/modal_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
import { createComment, deleteComment } from '../../actions/comment_actions';



class PictureDropdown extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      commentValue: '',
      liked: false
    };
  }



  componentDidUpdate(preProps){
    if(this.props.post && (preProps.post === null || preProps.post.likes.length !== this.props.post.likes.length)){
      this.setState({
        liked: this.props.post.likes.includes(this.props.currentUserId)
      });
    }
  }



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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closePictureDropdown: () => dispatch(closePictureDropdown()),
    createLike: (post_id) => dispatch(createLike(post_id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteLike: (post_id) => dispatch(deleteLike(post_id))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureDropdown);
