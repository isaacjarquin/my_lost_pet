const React = require('react')
const MissingPet = require('../../../features/missing_pet/MissingPet')
const ContactDetailsPanel = require('../../../features/panels/ContactDetailsPanel')
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
          .map((pet) => (
            <div className='pets-row'>
              <MissingPet {...pet} colSizeClass={'col-sm-6'} key={pet.id} />
              <ContactDetailsPanel id={pet.id} arrow={'arrow-up-center'} />
            </div>)
          )
        }
      </div>
    )
  }
})

module.exports = connector(Search)
