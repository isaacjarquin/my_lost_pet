const React = require('react')
const MissingPet = require('../../features/missing_pet/MissingPet')
const { object, string, arrayOf } = React.PropTypes
const { connector } = require('../../Store')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    searchTerm: string,
    selectFilter: string
  },
  render () {
    return (
      <div className='container'>
        <div className='row'>
          {this.props.pets
            .filter((pet) => `${pet.city} ${pet.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .filter((pet) => `${pet.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
            .map((pet) => (<MissingPet {...pet} key={pet.id} />))
          }
        </div>
        <div className="page-pagination">
          <ul className="pagination">
            <li><a href="#">1</a></li>
            <li className="active"><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
