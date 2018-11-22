import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, fetchPosts, deletePost } from '../../actions/post_actions';
import PostItem from './post_item';
import { FadeLoader } from 'react-spinners';
import { css } from 'react-emotion';

const override = css`
    display: block;
    margin: 30% auto;
    border-color: red;
`;

export class PostIndex extends React.Component {
  constructor(props){
    super(props);
    this.props.removeErrors();
  }

  componentDidMount(){
    this.props.fetchPosts();
  }

  render(){
    const items = this.props.posts.map(post => <PostItem key={post.id} post={post} deletePost={this.props.deletePost}/>);
    if(items.length === 0){
      return (
        <div className='post-item-box'>
          <FadeLoader className={override} sizeUnit={"px"} size={150} color={'grey'} />
        </div>
      )
    }else{
      return (
        <div className='posts-body'>
          {items}
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    users: Object.values(state.entities.users)
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  removeErrors: () => dispatch({type: 'REMOVE_ERROR'}),
  deletePost: (id) => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
