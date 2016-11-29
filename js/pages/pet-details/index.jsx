const React = require('react')
const { connector } = require('../../Store')

class PetDetails extends React.Component {
  assignPet (id) {
    const petArray = this.props.pets.filter((pet) => pet.id === id)
    return petArray[0]
  }
  render () {
    const { pet, breading, size, description, image, date, titleDescription } = this.assignPet(this.props.params.id)
    return (
      <div className='container'>
        <div className='pet-info'>
          <div className='pet-card w3-container w3-white w3-margin w3-padding-large'>
            <div className='pet-card_title w3-center '>
              <h3>{pet}, {breading}, {size}</h3>
              <h5>{titleDescription}, <span className='w3-opacity'>{date}</span></h5>
            </div>

            <div className='pet-card_body w3-justify'>
              <img src={image} alt='Men in Hats' className='w3-padding-12' />
              <p>{description}</p>
              <p className='w3-right'>
                <button data-toggle='collapse' data-target='#response-form' className='w3-btn w3-white w3-border'>
                  <b>Responder</b>
                </button>
              </p>
              <p className='w3-clear' />
            </div>
            <div id='response-form' className='collapse'>
              <div className='w3-white w3-margin'>
                <div className='w3-container w3-padding w3-black'>
                  <h4>Introduce tus datos de contacto</h4>
                </div>
                <div className='w3-container w3-white'>
                  <p className='form-introduction'>Introduce tus datos para poder ponerte en contacto con la persona que esta a cargo de tu mascota.</p>
                  <form>
                    <p><input className='w3-input w3-border' type='text' placeholder='Nombre' /></p>
                    <p><input className='w3-input w3-border' type='text' placeholder='e-mail' /></p>
                    <p><input className='w3-input w3-border' type='text' placeholder='Numero de telefono' /></p>
                    <p><button type='button' className='w3-btn-block w3-padding w3-green w3-opacity w3-hover-opacity-off'>Enviar mis datos</button></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

PetDetails.propTypes = {
  pets: arrayOf(object).isRequired,
  params: object
}

module.exports = connector(PetDetails)
