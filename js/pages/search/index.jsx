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
    pageSize: number,
    getPets: func
  },
  handlePageChange: function (pageNumber) {
    this.props.setActivePage(pageNumber)
  },
  componentDidMount: function () {
    const props = this.props

    $.ajax({
      url: '/api/envs',
      cache: true,
      type: 'GET',
      success: function (response) {
        const newProps = {}
        Object.assign(newProps, props, { urls: JSON.parse(response).urls} )
        props.setEnvs(JSON.parse(response))
        props.getPets(newProps)
      },
      error: function (xhr) { console.log(xhr) }
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
