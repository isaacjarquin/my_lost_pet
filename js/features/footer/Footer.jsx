const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./footer.scss')
}

const Footer = React.createClass({
  render () {
    return (
      <footer className='container-fluid text-center w3-grey w3-text-white'>
        <p>My lost pet Copyright</p>
      </footer>
    )
  }
})

module.exports = Footer
