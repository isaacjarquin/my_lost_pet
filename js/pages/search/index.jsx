const React = require('react')
const MissingPet = require('../../features/missing_pet/MissingPet')
const { object, string, arrayOf, number } = React.PropTypes
const { connector } = require('../../Store')
const Pagination = require('rc-pagination')
import 'whatwg-fetch'

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
  componentDidMount: function() {
    const props = this.props

    fetch('https://items-api.herokuapp.com/api/items', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      console.log(response)
      return response.json()
    }).then(function(json) {
      props.setPets(json.data)
    }).catch(function (err) {
      console.log(err)
    })
  },
  render () {
    return (
      <div className='container'>
        <div className='row pets-row'>
          {this.props.pets
            .filter((pet) => `${pet.city} ${pet.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .filter((pet) => `${pet.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
            .map((pet) => (<MissingPet {...pet} key={pet.id} />))
          }
        </div>
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
