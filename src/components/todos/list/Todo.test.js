import React from 'react';
import Todo from './Todo';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('Todo Component', () => {
  let wrapper;
  let props;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    props = {
      onChange: jest.fn()
    }

    wrapper = shallow(
      <Todo />)
  })
  it('Should render the right way', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the right way', () => {
    expect(wrapper.find('li')).to.have.lengthOf(1);
  });

  it('Should render the right way', () => {
    expect(wrapper.find('i')).to.have.lengthOf(3);
  });

})

