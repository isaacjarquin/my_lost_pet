const React = require('react')
const { object, string, arrayOf, number, func } = React.PropTypes
const { connector } = require('../../Store')
const Pagination = require('rc-pagination')
var MediaQuery = require('react-responsive')
const DesktopTemplateResults = require('./templates/desktop-results.jsx')
const TabletTemplateResults = require('./templates/tablet-results.jsx')
const MobileTemplateResults = require('./templates/mobile-results.jsx')

import 'whatwg-fetch'

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
      const activePagePets = result.slice(0, 6)

      props.setPets(result)
      props.setFilteredPets(result)
      props.setActivePagePets(activePagePets)
    }).catch(function (err) {
      console.log(err)
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
