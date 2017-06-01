import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddGreeter from '../AddGreeter/AddGreeter';
import HelloWorld from '../HelloWorld/HelloWorld';

describe(HelloWorldList, () => {
  const component = shallow(
    <HelloWorldList />
  );
// tests
  // snapshot test
  it('renders and matches snapshot', () => {
  // shallow render a component
    const component = renderer.create(
      <HelloWorldList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  // test that AddGreeter sub-component exists
  it('contains AddGreeter sub-component', () => {
    expect(component.find(AddGreeter)).toHaveLength(1);
  });
  // test for existence of a HelloWorld component for each greeting
  it('contains the same number of HelloWorld components as greetings', () => {
    const helloWorlds = component.find(HelloWorld).length;
    const greetings = component.state('greetings').length;
    expect(helloWorlds).toEqual(greetings);
  });
  // test addGreeting() functionality
  it('adds a greeting when addGreeting function is called', () => {
    const before = component.find(HelloWorld).length;
    component.instance().addGreeting('Sample');
    const after = component.find(HelloWorld).length;
    expect(after).toBeGreaterThan(before);
  });
  // test removeGreeting() functionality
  it('removes a greeting from the list when the remove greeting function is called', () => {
    const before = component.find(HelloWorld).length;
    const removeMe = component.state('greetings')[0];
    component.instance().removeGreeting(removeMe);
    const after = component.find(HelloWorld).length;
    expect(after).toBeLessThan(before);
  });
});
