import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Photo from './../components/Photo';

test('Photo displays the title', () => {
  const component = renderer.create(
    <Photo title="test" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();