import React from 'react';
import PostIndex from '../posts/post_index';
import { connect } from 'react-redux';
import SideBar from '../side_bar/side_bar';
// import { openSearchSelected, closeTabs } from '../../actions/ui_actions';



class HomePage extends React.Component{

  render(){
    return (
      <div className="posts-and-sidebar" >
        <PostIndex />
        <SideBar />
      </div>
    )
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     closeTabs: () => dispatch(closeTabs())
//   }
// }
export default HomePage;
// export default connect(null, mapDispatchToProps)(HomePage);
// onClick={this.props.closeTabs.bind(this)}
