/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/pages/search/index')
const { shallow, mount } = require('enzyme')
const { store, rootReducer } = require('../js/Store')

xdescribe('<Search />', () => {
  const pets = {pets: []}

  it('should render the brand', () => {
    const wrapper = shallow(<Search pets={pets}/>)

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

describe('Store', () => {
  it('should boostrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT'})

    expect(state).to.deep.equal({ searchTerm: ''})
  })

  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'dont care'}, {type: 'setSearchTerm', value: 'I do care a lot'})

    expect(state).to.deep.equal({searchTerm: 'I do care a lot'})
  })
})
