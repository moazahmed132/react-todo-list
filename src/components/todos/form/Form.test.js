import React from 'react';
import Form from './Form';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';


describe('InputText Component', () => {
  let component;
  let props;
  let keywords = 'this is some keyword';

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    props = {
      onChange: jest.fn()
    }

    component = shallow(
      <Form
        value={keywords}
        onChange={props.onChange} />
    );
  })

  it('Should render the right way', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render the button text the right way', () => {
    expect(component.find('button').text()).toBe('Add Todo')
  });


  it('should call the onChange function', () => {
    let mountedComponent = mount(
      <Form
        value={keywords}
        onChange={props.onChange} />
    );

    mountedComponent.find('input').simulate('change');

    expect(props.onChange).toHaveBeenCalled();
  });

  it('should change the value of the input onChange', () => {
    keywords = 'shawky';
    let mountedComponent = mount(
      <Form
        value={keywords}
        onChange={props.onChange} />
    );

    mountedComponent.find('input').simulate('change');

    expect(mountedComponent.find('input').prop('value')).toBe('shawky');
  })
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Form onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('addTodo', 1);
  });
})
