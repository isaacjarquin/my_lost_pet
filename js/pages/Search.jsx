const React = require('react')
const MissingPet = require('../features/MissingPet')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        {this.props.route.pets
          .filter((pet) => `${pet.pet} ${pet.breading} ${pet.size}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
          .map((pet) => (
            <MissingPet {...pet} key={pet.id} />
        ))}
      </div>
    )
  }
})

module.exports = Search
