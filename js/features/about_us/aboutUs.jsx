const React = require('react')

const ContactUs = React.createClass({
  render () {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h4 className='panel-title w3-center'>
            <a data-toggle='collapse' data-parent='#accordion' href='#collapse1'>
            ¿Quiénes somos?</a>
          </h4>
        </div>
        <div id='collapse1' className='panel-collapse collapse'>
          <div className='panel-body'>
            <div className='w3-margin'>
              <h6><b>¿Quiénes somos?</b></h6>
              <p>My lost pet es una organización sin fines de lucro compuesta por un grupo de voluntarios unidos por el amor hacia los animales y la convicción de que, juntos, podemos hacer mucho por ellos. </p>
              <p>Esta iniciativa fue creada con el objetivo de facilitar todo lo posible la búsqueda de nuestras mascotas cuando éstas se encuentran extraviadas. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ContactUs
