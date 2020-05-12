import React from 'react';
import Form from './Form';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('InputText Component', () => {
  let component;
  let props;
  let keywords = 'this is some key words';


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
  })
})