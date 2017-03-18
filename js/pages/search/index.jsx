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
  componentDidMount: function () {
    const props = this.props
    const extraDescription = (info) => {
      if (info.length > 165) {
        return info.slice(0, 165)
      } else {
        return ''
      }
    }

    const extraDescriptionHidden = (info) => {
      if (info.length > 165) {
        return info.slice(165, 1000)
      } else {
        return ''
      }
    }

    const showExtraInfo = (info) => {
      return info.length > 165
    }

    const resultDecorated = (itemsCollection) => {
      const newColection = []
      itemsCollection.forEach(function (item) {
        newColection.push({
          id: item.id,
          founderName: item.name,
          founderEmail: item.email,
          petType: item.kind,
          size: item.size,
          foundDate: item.date,
          location: item.location,
          imageUrl: item.image,
          description: item.info,
          extraDescription: extraDescription(item.info),
          extraDescriptionHidden: extraDescriptionHidden(item.info),
          showExtraInfo: showExtraInfo(item.info)
        })
      })

      return newColection
    }

    fetch('https://items-api.herokuapp.com/api/items', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      console.log(response)
      return response.json()
    }).then(function (json) {
      const result = resultDecorated(json.data)
      props.setPets(result)
    }).catch(function (err) {
      console.log(err)
    })
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
        {this.addPetRows(this.props.pets)
          .filter((pet) => `${pet.left.city} ${pet.left.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .filter((pet) => `${pet.right.city} ${pet.right.location}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
          .filter((pet) => `${pet.left.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
          .filter((pet) => `${pet.right.pet}`.toUpperCase().indexOf(this.props.selectFilter.toUpperCase()) >= 0)
          .map((row) => (
            <div className='pets-row'>
              <MissingPet {...row.left} key={row.left.id} />
              <MissingPet {...row.right} key={row.right.id} />
            </div>)
          )
        }
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
