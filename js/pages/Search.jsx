const React = require('react')
const data = require('../../public/mockData')
const MissingPet = require('../features/MissingPet')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'search term'
    }
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>My lost pet</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        {data.pets.map((pet) => (
          <MissingPet {...pet} key={pet.id} />
        ))}
      </div>
    )
  }
})

module.exports = Search
