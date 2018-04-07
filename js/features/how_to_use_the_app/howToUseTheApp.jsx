const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./howToUseTheApp.scss')
}

const HowToUseTheApp = React.createClass({
  render() {
    return (
      <div className='panel-body'>
        <div className='w3-margin'>
          <div className="how-to-use-left">
            <p>El objetivo principal de la aplicación es poner en contacto a la persona que haya perdido su mascota con la persona que la haya encontrado.</p>
            <p>La idea principal radica en que cuando nos encontramos un animal abandonado, todo lo que tenemos que hacer es introducir los datos relativos al animal y algunos datos personales de contacto. Tus datos personales en ningún momento se mostrarán a terceros ni serán utilizados para enviarte publicidad. La única finalidad de los mismos es la de poder comunicarte con la persona que haya perdido a su mascota. Una vez que hayas introducido los datos de la mascota encontrada, junto con una foto, que deberá ser inferior a 1Mbyte, debes hacer click en el botón guardar datos, y los datos serán almacenados en nuestra base de datos.</p>
            <p>Si por el contrario, lo que deseas es encontrar a tu mascota perdida, debes usar el filtro en la parte superior de la página donde podrás filtrar por tipo de mascota, comunidad autónoma y provincia. Esto te direccionará a una página donde se te mostrarán todas las mascotas perdidas en la provincia seleccionada que coinciden con tu tipo de mascota. En esta segunda página también te encontrarás con otro filtro, con el cual podrás filtrar por ciudad o municipio, raza y tamaño. La combinación de estos 6 filtros nos permitirá una potente búsqueda que debería ser suficiente para encontrar a tu mascota. Una vez hayas encontrado a tu mascota, debes hacer click en el botón de contactar.</p>
            <p>Esto desplegará un panel en el que deberás introducir tu información personal de contacto, para que la persona que encontró tu mascota se ponga en contacto contigo.</p>
          </div>
          <div className="how-to-use-right">
            <img className='how-to-use-image' id="bg" src='../../../public/dog-animated.png' alt='Pet home' />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = HowToUseTheApp
