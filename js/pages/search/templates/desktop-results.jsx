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
  addPetRows: function (pets) {
    let petRows = []
    let row = {}
    this.pairwise(pets, function (left, center, right) {
      row = {left: left, center: center, right: right}
      petRows.push(row)
    })
    return petRows
  },
  pairwise: function (arr, func) {
    for (var i = 1; i < arr.length - 1; i += 3) {
      func(arr[i], arr[i + 1], arr[i + 2])
    }
  },
  render () {
    return (
      <div>
        {this.addPetRows(this.props.pets)
          .filter((pet) => `${pet.left.city} ${pet.left.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .filter((pet) => `${pet.right.city} ${pet.right.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .filter((pet) => `${pet.left.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
          .filter((pet) => `${pet.right.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
          .map((row) => (
            <div className='pets-row'>
              <MissingPet {...row.left} colSizeClass={'col-sm-3'} key={row.left.id} />
              <MissingPet {...row.center} colSizeClass={'col-sm-3'} key={row.center.id} />
              <MissingPet {...row.right} colSizeClass={'col-sm-3'} key={row.right.id} />
              <ContactDetailsPanel id={row.left.id} arrow={'arrow-up-left'} />
              <ContactDetailsPanel id={row.center.id} arrow={'arrow-up-center'} />
              <ContactDetailsPanel id={row.right.id} arrow={'arrow-up-right'} />
            </div>)
          )
        }
      </div>
    )
  }
})

module.exports = connector(Search)
