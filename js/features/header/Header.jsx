const React = require('react')
const Jumbotron = require('./Jumbotron')
const Navbar = require('./Navbar')
const { string, func } = React.PropTypes

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
  displayNavbar ({location, setSearchTerm, searchTerm, setSelectFilter}) {
    if (location === '/search') {
      return <Navbar setSearchTerm={setSearchTerm} setSelectFilter={setSelectFilter} searchTerm={searchTerm} />
    } else {
      return null
    }
  },
  render () {
    return (
      <header className='header'>
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
