const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./footer.scss')
}

const Footer = React.createClass({
  render () {
    return (
      <footer className='w3-container w3-grey w3-center w3-padding-xlarge'>
        <a className='w3-margin' href='#' data-toggle='collapse' data-target='#about-us'>¿Quiénes somos?</a>
        <a className='w3-margin' href='#' data-toggle='collapse' data-target='#contact-us'>Contacto</a>
        <a className='w3-margin' href='#' data-toggle='collapse' data-target='#legal'>Términos y condiciones</a>
      </footer>
    )
  }
})

module.exports = Footer
