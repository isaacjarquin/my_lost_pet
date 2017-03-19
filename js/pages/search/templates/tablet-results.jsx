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
  addPetRows: function (pets) {
    let petRows = []
    let row = {}
    this.pairwise(pets, function (current, next) {
      row = {left: current, right: next}
      petRows.push(row)
    })
    return petRows
  },
  pairwise: function (arr, func) {
    for (var i = 0; i < arr.length - 1; i += 2) {
      func(arr[i], arr[i + 1])
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
              <MissingPet {...row.left} colSizeClass={'col-sm-5'} key={row.left.id} />
              <MissingPet {...row.right} colSizeClass={'col-sm-5'} key={row.right.id} />
            </div>)
          )
        }
      </div>
    )
  }
})

module.exports = connector(Search)
