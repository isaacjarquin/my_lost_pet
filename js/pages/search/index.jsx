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
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            {this.props.pets
              .filter((pet) => `${pet.pet} ${pet.breading} ${pet.size}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
              .map((pet) => (
                <MissingPet {...pet} key={pet.id} />
             ))}
          </div>
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
