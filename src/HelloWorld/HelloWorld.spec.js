import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorld from './HelloWorld';

describe(HelloWorld, () => {
  // tests
  // generic snapshot test
  it ('renders and matches the snapshot', () => {
    const component = renderer.create(
      <HelloWorld name='Person' />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
// vars for feature tests
  const name = 'Person';
  // fake a removeGreeting method
  const mockRemoveGreeting = jest.fn();
  // fake 'shallow' component
  const component = shallow(
    <HelloWorld name={name} removeGreeting={mockRemoveGreeting} />
  );
  // test that component contains name => 'Person'
  it('contains the supplied name', () => {
    expect(component.text()).toContain(name);
  });
// check translate buttons
  it('modifies the greeting when frenchify/spanishify/englishify button is clicked', () => {
    // french button
    component.find('button.frenchify').simulate('click');
    expect(component.text()).toContain('Bonjour');
    // spanish button
    component.find('button.spanishify').simulate('click');
    expect(component.text()).toContain('Hola');
    // english button
    component.find('button.englishify').simulate('click');
    expect(component.text()).toContain('Hello');
  });
  // check remove button
  it('calls the passed-in removeGreeting when remove button is clicked', () => {
    component.find('button.remove').simulate('click');
    expect(mockRemoveGreeting).toBeCalled();
  });
});
