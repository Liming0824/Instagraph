import React from 'react';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { PostItem } from '../frontend/components/posts/post_item';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
Enzyme.configure({adapter: new ReactSixteenAdapter()});

let middlewares = [ thunk ],
    mockStore = configureMockStore(middlewares);
export function renderComponent(ComponentClass, props={}, reduxState={}) {
    let component = Enzyme.mount(<ComponentClass {...props} />, {
            context: { store: mockStore(reduxState) }
        });
    return component;
}


describe('<PostItem />', () => {

  it('botton onclick should call function', ()=>{
    // const props = {
    //   loggedIn: true,
    //   currentUser: {id: 1},
    //   followed: true,
    //   pageOwner: {
    //     id: 2,
    //     posts: [],
    //     followers: [],
    //     followings: []
    //   },
    //   createFollow: jest.fn(),
    //   destroyFollow: jest.fn(),
    //   fetchUsers: jest.fn(),
    //   fetchUser: jest.fn(),
    //
    // };
    let wrapper;
    // wrapper = Enzyme.mount(<PostItem {...props}/>);
    beforeEach(() => {
        wrapper = renderComponent(PostItem);
    });


    const spy = jest.spyOn(wrapper.instance(), 'updateComment');
    wrapper.forceUpdate();
    wrapper.find('input').first().simulate('change', { target: { value: 's' }});
    expect(spy).toHaveBeenCalled();
    //it's important to restore an orginal method as next test suite will use mocked version.
    spy.mockRestore();
  });





});
