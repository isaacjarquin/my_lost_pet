const React = require('react')
const MissingPet = require('../../../features/missing_pet/MissingPet')
const ContactDetailsPanel = require('../../../features/panels/ContactDetailsPanel')
const { connector } = require('../../../Store')
const { object, string, arrayOf } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    searchTerm: string,
    selectFilter: string,
    activePagePets: arrayOf(object)
  },
  addPetRows: function (pets) {
    let petRows = []
    let row = {}

    this.pairwise(pets, function (current, next) {
      if (next !== undefined) {
        row = {left: current, right: next}
      } else {
        row = {left: current, right: {id: undefined}}
      }

      petRows.push(row)
    })

    return petRows
  },
  pairwise: function (arr, func) {
    for (var i = 0; i <= arr.length - 1; i += 2) {
      func(arr[i], arr[i + 1])
    }
  },
  render () {
    return (
      <div>
        {this.addPetRows(this.props.activePagePets)
          .map((pet) => (
            <div className='pets-row'>
              {[pet.left, pet.right]
                .filter((pet) => `${pet.location} ${pet.city}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
                .filter((pet) => `${pet.petType}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
                .map((pet) => (<MissingPet {...pet} colSizeClass={'col-sm-5'} key={pet.id} />))
              }
              <ContactDetailsPanel id={pet.left.id} arrow={'arrow-up-left'} colSizeClass={'.col-sm-5'} />
              <ContactDetailsPanel id={pet.right.id} arrow={'arrow-up-right'} colSizeClass={'.col-sm-5'} />
            </div>)
          )
        }
      </div>
    )
  }
})

module.exports = connector(Search)
