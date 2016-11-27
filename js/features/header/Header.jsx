const React = require('react')
const Jumbotron = require('./Jumbotron')
const Navbar = require('./Navbar')

if (process.env.WEBPACK_BUILD) {
  require('./header.scss')
}

const Header = React.createClass({
  displayNavbar (pathname) {
    console.log(pathname)
    if (pathname === '/search') {
      return <Navbar />
    } else {
      return null
    }
  },
  render () {
    return (
      <header className='header'>
        <ul className="w3-navbar w3-black w3-hide-small">
          <li className="w3-left"><a href="#">Home<i></i></a></li>
          <li className="w3-left"><a href="#">About us<i></i></a></li>
          <li className="w3-right"><a href="#"><i className="fa fa-facebook-official"></i></a></li>
          <li className="w3-right"><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li className="w3-right"><a href="#"><i className="fa fa-search"></i></a></li>
        </ul>
        <Jumbotron />
        {this.displayNavbar(this.props.location)}
      </header>
    )
  }
})

module.exports = Header
