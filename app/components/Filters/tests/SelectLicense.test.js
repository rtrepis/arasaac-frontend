import { shallow } from 'enzyme'
import expect from 'expect'
import React from 'react'
import SelectField from 'material-ui/SelectField'
import Component from '../SelectLicense'


describe('<SelectLicense />', () => {
  it('should contain a SelectField', () => {
    const renderedComponent = shallow(<Component />)
    expect(renderedComponent.find(<SelectField />)).toExist()
  })
})
