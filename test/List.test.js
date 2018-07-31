import React from 'react';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import List from './../components/List';

describe('List component renders a list of photos', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<List/>);
    const loading = true;

    const data = [
      {title: "x"},
      {title: "y"},
      {title: "z"}
    ];
    consst error = '';

    wrapper.setState({
      loading,
      data,
	 error
    });

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});