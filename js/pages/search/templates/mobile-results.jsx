const React = require('react')
const MissingPet = require('../../../features/missing_pet/MissingPet')
const { connector } = require('../../../Store')
const { object, string, arrayOf, number } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    searchTerm: string,
    selectFilter: string
  },
  render () {
    return (
      <div>
        {this.props.pets
          .filter((pet) => `${pet.city} ${pet.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .filter((pet) => `${pet.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
          .map((row) => (
            <div className='pets-row'>
              <MissingPet {...row} colSizeClass={'col-sm-5'} key={row.id} />
            </div>)
          )
        }
      </div>
    )
  }
})

module.exports = connector(Search)
