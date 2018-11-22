import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { SideBar } from '../frontend/components/side_bar/side_bar';
import { PostIndex } from '../frontend/components/posts/post_index';


describe('match snapshot', () => {
    it('<SideBar /> snapshot match', () => {
      const props = {
        followings: [],
        currentUser: {},
        searchUsersByIds: jest.fn(),
      };
      const tree = renderer.create(<SideBar {...props}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('<PostIndex /> snapshot match', ()=>{

      const props = {
        removeErrors: jest.fn(),
        fetchPosts: jest.fn(),
        posts: [],
      };
      const tree = renderer.create(<PostIndex {...props}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });


});
