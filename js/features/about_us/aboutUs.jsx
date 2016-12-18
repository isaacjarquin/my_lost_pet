const React = require('react')

const ContactUs = React.createClass({
  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title w3-center">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
            ¿Quiénes somos?</a>
          </h4>
        </div>
        <div id="collapse1" className="panel-collapse collapse">
          <div className="panel-body">
            <div className='w3-margin'>
              <h6><b>¿Quiénes somos?</b></h6>
              <p>My lost pet es  una organización sin fines de lucro compuesta por un grupo de voluntarios unidos por el amor hacia los animales y la convicción de que, juntos, podemos hacer mucho por ellos. </p>
              <p>Esta iniciativa fue creada con el objetivo de facilitar todo lo posible la busqueda de nuestras mascotas cuando éstas se encuntran extraviadas </p>
            </div>

            <div className='w3-margin'>
              <h6><b>¿Como funciona?</b></h6>
              <p>El objetivo principal de la aplicación es poner en contacto a la persona que haya perdido su mascota con la persona que la haya encontrado.</p>
              <p>La idea principal radica en que cuando nos encontramos un animal abandonado, todo lo que tenemos que hacer es introducir los datos relativos al animal y algunos datos personales de contacto. Tus datos personales en ningun momento se mostrarán a terceros ni serán utilizados para enviarte publicidad. La única finalidad de los mismos es la de poder comunicarte con la persona que haya perdido su mascota.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ContactUs
