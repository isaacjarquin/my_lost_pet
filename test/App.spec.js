/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/pages/Search')
const { shallow, mount } = require('enzyme')

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper.contains(<h1 className='brand'>My lost pet</h1>)).to.be.true
    expect(wrapper.contains('My lost pet')).to.be.true
  })

  it('should filter correcly given a new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')

    input.node.value = 'cat'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('cat')
    expect(wrapper.find('.pet').length).to.equal(2)
  })
})
