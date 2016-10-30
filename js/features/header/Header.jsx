const React = require('react')
const Jumbotron = require('./Jumbotron')
const Navbar = require('./Navbar')

if (process.env.WEBPACK_BUILD) {
  require('./header.scss')
}

const Header = React.createClass({
  render () {
    return (
      <header className='header'>
        <Jumbotron />
        <Navbar />
      </header>
    )
  }
})

module.exports = Header
