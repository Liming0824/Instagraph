import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, fetchPosts, deletePost } from '../../actions/post_actions';
import PostItem from './post_item';




class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.props.removeErrors();
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    
    const items = this.props.posts.map(post => <PostItem key={post.id} post={post} deletePost={this.props.deletePost}/>);
    return (
      <div className='posts-body'>
        {items}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  //This function not really work
  let origin_posts = Object.values(state.entities.posts);
  origin_posts = origin_posts.sort((x,y) => {
    Date.parse(x.created_at) - Date.parse(y.created_at)
  })
  return {
    posts: origin_posts,
    users: Object.values(state.entities.users)
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  removeErrors: () => dispatch({type: 'REMOVE_ERROR'}),
  deletePost: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
