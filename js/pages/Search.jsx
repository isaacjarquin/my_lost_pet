const React = require('react')
const MissingPet = require('../features/missing_pet/MissingPet')
const { object, string, arrayOf } = React.PropTypes
const Header = require('../features/Header')
const { connector } = require('../Store')

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        {this.props.pets
          .filter((pet) => `${pet.pet} ${pet.breading} ${pet.size}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .map((pet) => (
            <MissingPet {...pet} key={pet.id} />
        ))}
      </div>
    )
  }
})

module.exports = connector(Search)
