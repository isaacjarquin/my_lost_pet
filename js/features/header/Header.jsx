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
        <Jumbotron />
        {this.displayNavbar(this.props.location)}
      </header>
    )
  }
})

module.exports = Header
