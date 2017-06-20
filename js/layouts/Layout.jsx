const React = require('react')
const Header = require('../features/header/Header')
const Footer = require('../features/footer/Footer')
const { connector } = require('../Store')
const MobileHeader = require('../features/header/MobileHeader.js')
var MediaQuery = require('react-responsive')

const { element, object } = React.PropTypes

const Layout = React.createClass({
  propTypes: {
    children: element.isRequired,
    location: object.isRequired,
    social: object.isRequired,
    urls: object.isRequired
  },
  displayHeader ({location, setSearchTerm, setSelectFilter, searchTerm, selectFilter, pets, filters}) {
    if (location.pathname === '/') {
      return <MediaQuery maxDeviceWidth={736}><MobileHeader {...this.props.social} hostUrl={this.props.urls.host} /></MediaQuery>
    } else {
      return <div className='row'>
        <Header
          location={location.pathname}
          setSearchTerm={setSearchTerm}
          setSelectFilter={setSelectFilter}
          searchTerm={searchTerm}
          locationFilter={filters.location}
          selectFilter={selectFilter}
          pets={pets}
          social={this.props.social}
          urls={this.props.urls}
        /></div>
    }
  },
  displayFooter ({pathname}) {
    if (pathname === '/') {
      return null
    } else {
      return <Footer />
    }
  },
  render () {
    return (
      <div className='container app-container'>
        {this.displayHeader(this.props)}
        <div className='row'>
          {this.props.children}
        </div>
        {this.displayFooter(this.props.location)}
      </div>
    )
  }
})

module.exports = connector(Layout)
