import React from 'react';
import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Greeting from '../frontend/components/greeting/greeting';
Enzyme.configure({adapter: new ReactSixteenAdapter()});



describe('<Greeting />', () => {
  const props = {
    remove_error: jest.fn(),
    login: jest.fn(),
    location: {
      pathname: '/login'
    }
  };
  it('renders a <div className="greeting_page" />', () => {
    const wrapper = Enzyme.shallow(<Greeting {...props}/>);
    expect(wrapper.find('div').length).toEqual(5);
  });



});
