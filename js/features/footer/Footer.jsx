const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./footer.scss')
}

const Footer = React.createClass({
  render () {
    return (
      <footer className='w3-container w3-grey w3-center w3-padding-xlarge'>@MyLostPet</footer>
    )
  }
})

module.exports = Footer
