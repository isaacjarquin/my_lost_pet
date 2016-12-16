const React = require('react')
const $ = require('jquery')

if (process.env.WEBPACK_BUILD) {
  require('./footer.scss')
}

const Footer = React.createClass({
  handleClick: function (event) {
    const clickedLink = event.target.id

    const links = [
      { current: 'about-us-link', targetId: '#about-us' },
      { current: 'contact-us-link', targetId: '#contact-us' },
      { current: 'legal-link', targetId: '#legal' }
    ]

    links.forEach((link, clickedLinkId) => {
      if (clickedLink !== link.current) {
          $(link.targetId).remove('.in')
      }
    })
  },
  render () {
    return (
      <footer className='w3-container w3-grey w3-center w3-padding-xlarge'>
        <a id='about-us-link' onClick={this.handleClick} className='w3-margin w3-opacity' href='#' data-toggle='collapse' data-target='#about-us'>¿Quiénes somos?</a>
        <a id='contact-us-link' onClick={this.handleClick} className='w3-margin w3-opacity' href='#' data-toggle='collapse' data-target='#contact-us'>Contacto</a>
        <a id='legal-link' onClick={this.handleClick} className='w3-margin w3-opacity' href='#' data-toggle='collapse' data-target='#legal'>Términos y condiciones</a>
      </footer>
    )
  }
})

module.exports = Footer
