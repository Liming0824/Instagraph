import React from 'react';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { SideBar } from '../frontend/components/side_bar/side_bar';
Enzyme.configure({adapter: new ReactSixteenAdapter()});


describe('SideBar', () => {
  it("calculate last post time，return value", ()=>{
    const props = {
      users: {},
      currentUser: {},
      followings: [],
      searchUsersByIds: jest.fn()
    };
    const wrapper = Enzyme.shallow(<SideBar {...props}/>);
    const story = wrapper.instance();
    const spy = jest.spyOn(story, 'getDateDiff');
    const period = story.getDateDiff(new Date());
    expect(spy).toReturn();
    spy.mockRestore();
  });


  it("calculate last post time， throw error", ()=>{
    const props = {
      users: {},
      currentUser: {},
      followings: [],
      searchUsersByIds: jest.fn()
    };
    const wrapper = Enzyme.shallow(<SideBar {...props}/>);
    const story = wrapper.instance();
    const spy = jest.spyOn(story, 'getDateDiff');
    const period = story.getDateDiff('');
    expect(period).toBeFalsy();
    spy.mockRestore();
  });


  it("calculate last post time，return exact context", ()=>{
    const props = {
      users: {},
      currentUser: {},
      followings: [],
      searchUsersByIds: jest.fn()
    };
    const wrapper = Enzyme.shallow(<SideBar {...props}/>);
    const story = wrapper.instance();
    const spy = jest.spyOn(story, 'getDateDiff');
    const period = story.getDateDiff(new Date());
    expect(period).toEqual("JUST NOW");
    spy.mockRestore();
  });








});
