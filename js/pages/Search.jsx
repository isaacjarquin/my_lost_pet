const React = require('react')
const data = require('../../public/mockData')
const MissingPet = require('../features/MissingPet')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
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
        {data.pets
          .filter((pet) => `${pet.pet} ${pet.breading} ${pet.size}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((pet) => (
            <MissingPet {...pet} key={pet.id} />
        ))}
      </div>
    )
  }
})

module.exports = Search
