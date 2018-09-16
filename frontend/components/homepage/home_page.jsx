import React from 'react';
import PostIndex from '../posts/post_index';
import { connect } from 'react-redux';
import SideBar from '../side_bar/side_bar'


const HomePage = () => {
  return (
    <div className="posts-and-sidebar">
      <PostIndex />
      <SideBar />
    </div>
  )
};

export default HomePage;
