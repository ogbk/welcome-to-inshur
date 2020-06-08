/* eslint-disable */

import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';
import App from '../src/App';

configure({ adapter: new Adapter() });

let app;
let tabs;

beforeAll(() => {
  app = mount(<App />);
  tabs = app.find('.page-tab > span');
});

describe('<App/>', () => {

  test('basic', () => {
    expect(1).toEqual(1)
  });

})
