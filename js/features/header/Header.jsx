const React = require('react')
const Jumbotron = require('./Jumbotron')
const Navbar = require('./Navbar')
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
  displayNavbar ({location, setSearchTerm, searchTerm, setSelectFilter, pets, selectFilter, locationFilter}) {
    console.log('this.props', this.props)
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
        <Jumbotron />
        {this.displayNavbar(this.props)}
      </header>
    )
  }
})

module.exports = Header
