const React = require('react')

const ContactUs = React.createClass({
  render () {
    return (
      <div>
        <h2 className='w3-center w3-opacity'>Contacto</h2>
        <div className='w3-section w3-center w3-opacity'>
          <i className='fa fa-map-marker fa-fw w3-xxlarge w3-margin' /> Las Palmas de Gran Canaria, España
          <i className='fa fa-phone fa-fw w3-xxlarge w3-margin' /> Phone: +00 151515
          <i className='fa fa-envelope fa-fw w3-xxlarge w3-margin' /> Email: mylostpet@mail.com
        </div>
        <form>
          <p><input className='w3-input w3-border' type='text' placeholder='Nombre' /></p>
          <p><input className='w3-input w3-border' type='email' placeholder='e-mail' /></p>
          <p><textarea className='w3-input w3-border' placeholder='Imformacion sobre la mascota' /></p>
          <button type='submit' className='w3-btn-block w3-padding-12 w3-grey w3-opacity w3-hover-opacity-off'><i className='fa fa-paper-plane' /> Enviar mensaje</button>
        </form>
      </div>
    )
  }
})

module.exports = ContactUs
