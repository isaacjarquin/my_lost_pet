const React = require('react')
const { object, string, arrayOf, number, func } = React.PropTypes
const { connector } = require('../../Store')
const Pagination = require('rc-pagination')
var MediaQuery = require('react-responsive')
const DesktopTemplateResults = require('./templates/desktop-results.jsx')
const TabletTemplateResults = require('./templates/tablet-results.jsx')
const MobileTemplateResults = require('./templates/mobile-results.jsx')
const $ = require('jquery')

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    searchTerm: string,
    selectFilter: string,
    setActivePage: func,
    setActivePagePets: func,
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
      if (info.length > 90) {
        return info.slice(0, 90)
      } else {
        return ''
      }
    }

    const extraDescriptionHidden = (info) => {
      if (info.length > 90) {
        return info.slice(90, 1000)
      } else {
        return ''
      }
    }

    const showExtraInfo = (info) => {
      return info.length > 90
    }

    const resultDecorated = (itemsCollection) => {
      const newColection = []
      itemsCollection.forEach(function (item) {
        newColection.push({
          id: item.id,
          founderName: item.name,
          founderEmail: item.email,
          petType: item.kind,
          breed: item.breed,
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

    const urlParams = ({location, petType}) => {
      if (location !== '' && petType !== '') {
        return { location: location, petType: petType }
      } else if (location !== '' && petType === '') {
        return { location: location }
      } else if (location === '' && petType !== '') {
        return { petType: petType }
      } else {
        return {}
      }
    }

    $.ajax({
      url: 'http://localhost:4000/api/items',
      data: urlParams(props.filters),
      cache: false,
      type: 'GET',
      success: function (response) {
        const result = resultDecorated(response.data)
        const activePagePets = result.slice(0, 6)

        props.setPets(result)
        props.setFilteredPets(result)
        props.setActivePagePets(activePagePets)
      },
      error: function (xhr) {
        console.log(xhr)
      }
    })
  },
  render () {
    return (
      <div className='container'>
        <div className='search-results'>
          <MediaQuery minDeviceWidth={1200}>
            <DesktopTemplateResults pets={this.props.pets} />
          </MediaQuery>
          <MediaQuery minDeviceWidth={768} maxDeviceWidth={1200}>
            <TabletTemplateResults pets={this.props.pets} />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={736}>
            <MobileTemplateResults pets={this.props.pets} />
          </MediaQuery>
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
