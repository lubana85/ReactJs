import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import Photo from './../components/Photo';

test('Photo displays the title', () => {
  
  const item = {
        title: 'photo title',
        url: 'http://placehold.it/600/92c952',
        thumbnailUrl: 'http://placehold.it/150/92c952',
    };
  const component = renderer.create(
    <Photo {...item} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
