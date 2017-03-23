const React = require('react')
const MissingPet = require('../../../features/missing_pet/MissingPet')
const ContactDetailsPanel = require('../../../features/panels/ContactDetailsPanel')
const { connector } = require('../../../Store')
const { object, string, arrayOf } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    searchTerm: string,
    selectFilter: string
  },
  addPetRows: function (pets) {
    let petRows = []
    let row = {}

    this.rowElements(pets, function (left, center, right) {
      if (center === undefined) {
        row = {left: left, center: {id: undefined}, right: {id: undefined}}
      } else if (right === undefined) {
        row = {left: left, center: center, right: {id: undefined}}
      } else {
        row = {left: left, center: center, right: right}
      }

      petRows.push(row)
    })

    return petRows
  },
  rowElements: function (arr, func) {
    for (var i = 0; i <= arr.length - 1; i += 3) {
      func(arr[i], arr[i + 1], arr[i + 2])
    }
  },
  render () {
    return (
      <div>
        {this.addPetRows(this.props.pets)
          .filter((pet) => `${pet.left.city} ${pet.center.city} ${pet.right.city} ${pet.left.location} ${pet.center.location} ${pet.right.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .filter((pet) => `${pet.left.pet} ${pet.center.pet} ${pet.right.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
          .map((pet) => (
            <div className='pets-row'>
              {[pet.left, pet.center, pet.right]
                .filter((pet) => `${pet.location} ${pet.city}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
                .map((pet) => (<MissingPet {...pet} colSizeClass={'col-sm-3'} key={pet.id} />))
              }
              <ContactDetailsPanel id={pet.left.id} arrow={'arrow-up-left'} />
              <ContactDetailsPanel id={pet.center.id} arrow={'arrow-up-center'} />
              <ContactDetailsPanel id={pet.right.id} arrow={'arrow-up-right'} />
            </div>)
          )
        }
      </div>
    )
  }
})

module.exports = connector(Search)
