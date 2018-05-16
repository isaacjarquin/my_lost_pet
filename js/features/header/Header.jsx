const React = require('react')
const Jumbotron = require('./Jumbotron')
const Navbar = require('./Navbar')
const MobileNavbar = require('./MobileNavbar')
const MobileHeader = require('./MobileHeader')
const TopNavigationBar = require('../navigation/topNavigationBar')
const { string, func, object } = React.PropTypes
var MediaQuery = require('react-responsive')

if (process.env.WEBPACK_BUILD) {
  require('./header.scss')
}

const Header = React.createClass({
  propTypes: {
    location: string,
    searchTerm: string,
    setSearchTerm: func,
    setSelectFilter: func,
    social: object.isRequired,
    urls: object.isRequired
  },
  displayMobileNavbar ({location, setSearchTerm, searchTerm, setSelectFilter, pets, selectFilter, locationFilter}) {
    if (location === '/search') {
      return <MobileNavbar
        setSearchTerm={setSearchTerm}
        setSelectFilter={setSelectFilter}
        searchTerm={searchTerm}
        locationFilter={locationFilter}
        selectFilter={selectFilter}
        pets={pets} />
    } else {
      return null
    }
  },
  displayDesktopNavbar({ location, setSearchTerm, searchTerm, setSelectFilter, pets, selectFilter, locationFilter }) {
    if (location === '/search') {
      return <Navbar
        setSearchTerm={setSearchTerm}
        setSelectFilter={setSelectFilter}
        searchTerm={searchTerm}
        locationFilter={locationFilter}
        selectFilter={selectFilter}
        pets={pets} />
    } else {
      return null
    }
  },
  render () {
    return (
      <header className='header'>
        <MediaQuery maxDeviceWidth={736}><MobileHeader {...this.props.social} hostUrl={this.props.urls.host} /></MediaQuery>
        <TopNavigationBar {...this.props.social} hostUrl={this.props.urls.host} />
        <Jumbotron pets={this.props.pets} />
        <MediaQuery minDeviceWidth={768}>{this.displayDesktopNavbar(this.props)}</MediaQuery>
        <MediaQuery maxDeviceWidth={736}>{this.displayMobileNavbar(this.props)}</MediaQuery>
      </header>
    )
  }
})

module.exports = Header
