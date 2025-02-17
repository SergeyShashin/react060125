import React, { Component }  from 'react';
import { Header } from './Header';
// import renderer from 'react-test-renderer';
import {render} from 'node_modules\@testing-library';

test('Header should be rendered', () => {
  // let a = 2 + 5;
  // expect(a).toBe(7);
  // expect(a).not.toBeNull();

  // let tree = renderer
  //   .create(<Header chatName={'Chat1'} />)
  //   .toJSON();

  // expect(tree).toMatchSnapshot();

  const {asFragment, getByText} = render(<Header chatName={'Chat1'} />)
  expect(getByText('Chat1')).toBeInTheDocument()
  // expect(asFragment()).toMatchInlineSnapshot(`
  //   <h1>Hello, World!</h1>
  // `)
});