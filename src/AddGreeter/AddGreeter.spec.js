import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import AddGreeter from './AddGreeter';

describe(AddGreeter, () => {
  // mock function
  const mockAddGreeting = jest.fn();
  // create shallow component
  const component = shallow(
    <AddGreeter addGreeting={mockAddGreeting}/>
  );
  // snapshot test
  it('renders and matches our snapshot', () => {
    const component = renderer.create(
      <AddGreeter />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  // test that form exists
  it('contains the add-greeting form', () => {
    expect(component.find('input')).toHaveLength(1);
    expect(component.find('button')).toHaveLength(1);
  });
  // test addGreeting() functionality
  it('calls addGreeting when add-greeting button is clicked', () => {
    component.find('button').simulate('click');
    expect(mockAddGreeting).toBeCalled();
  });
  // test handleUpdate() functionality
  it('updates greetingName from the form when keys are pressed', () => {
    const updateKey = 'foo';
    component.instance().handleUpdate({ target: { value: updateKey }});
    expect(component.state('greetingName')).toEqual(updateKey);
  });
  // test form reset when 'add' button is clicked
  it('blanks out the greetingName when the button is clicked', () => {
    const updateKey = 'bar';
    component.instance().handleUpdate({ target: { value: updateKey }});
    expect(component.state('greetingName')).toEqual(updateKey);
    component.find('button').simulate('click');
    expect(component.state('greetingName')).toHaveLength(0);
  });
});
