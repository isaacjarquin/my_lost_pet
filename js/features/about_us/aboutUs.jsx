const React = require('react')

const ContactUs = React.createClass({
  render () {
    return (
      <div className='panel-body'>
        <div className='w3-margin'>
          <h6><b>¿Quiénes somos?</b></h6>
          <p>My lost pet es una organización sin fines de lucro compuesta por un grupo de voluntarios unidos por el amor hacia los animales y la convicción de que, juntos, podemos hacer mucho por ellos. </p>
          <p>Esta iniciativa fue creada con el objetivo de facilitar todo lo posible la búsqueda de nuestras mascotas cuando éstas se encuentran extraviadas. </p>
        </div>
      </div>
    )
  }
})

module.exports = ContactUs
