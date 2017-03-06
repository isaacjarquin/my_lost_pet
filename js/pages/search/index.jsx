const React = require('react')
const MissingPet = require('../../features/missing_pet/MissingPet')
const { object, string, arrayOf, number } = React.PropTypes
const { connector } = require('../../Store')
const Pagination = require('rc-pagination')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    searchTerm: string,
    selectFilter: string,
    setActivePage: number,
    activePage: number,
    totalNumberOfPets: number,
    pageSize: number
  },
  handlePageChange: function (pageNumber) {
    this.props.setActivePage(pageNumber)
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
      <div className='container'>
        {this.addPetRows(this.props.pets).map((row) => (
          <div className='pets-row'>
            <MissingPet {...row.left} key={row.left.id} />
            <MissingPet {...row.right} key={row.right.id} />
          </div>
        ))}
        <div className='center'>
          <Pagination
            className='pagination'
            current={this.props.activePage}
            total={this.props.totalNumberOfPets}
            pageSize={this.props.pageSize}
            onChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
