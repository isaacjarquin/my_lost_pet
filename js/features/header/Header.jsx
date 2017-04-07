const React = require('react')
const Jumbotron = require('./Jumbotron')
const Navbar = require('./Navbar')
const MobileHeader = require('./MobileHeader')
const { string, func } = React.PropTypes
var MediaQuery = require('react-responsive')

if (process.env.WEBPACK_BUILD) {
  require('./header.scss')
}

const Header = React.createClass({
  propTypes: {
    location: string,
    searchTerm: string,
    setSearchTerm: func,
    setSelectFilter: func
  },
  displayNavbar ({location, setSearchTerm, searchTerm, setSelectFilter, pets, selectFilter}) {
    if (location === '/search') {
      return <Navbar
        setSearchTerm={setSearchTerm}
        setSelectFilter={setSelectFilter}
        searchTerm={searchTerm}
        selectFilter={selectFilter}
        pets={pets} />
    } else {
      return null
    }
  },
  render () {
    return (
      <header className='header'>
        <MediaQuery maxDeviceWidth={736}>
          <MobileHeader />
        </MediaQuery>
        <ul className='w3-navbar w3-black w3-hide-small'>
          <li className='w3-left'><a href='/'>Home<i /></a></li>
          <li className='w3-right'><a href='#'><i className='fa fa-facebook-official' /></a></li>
          <li className='w3-right'><a href='#'><i className='fa fa-twitter' /></a></li>
        </ul>
        <Jumbotron />
        {this.displayNavbar(this.props)}
      </header>
    )
  }
})

module.exports = Header
