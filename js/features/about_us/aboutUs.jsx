const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./aboutUs.scss')
}

const ContactUs = React.createClass({
  render () {
    return (
      <div className='panel-body'>
        <div className='w3-margin'>
          <div className="about-us-left">
            <p><img className='about-us-image' id="bg" src='../../../public/dog-and-cat.jpg' alt='Pet home' /></p>
          </div>
          <div className="about-us-right">
            <p>My lost pet es una organización sin fines de lucro compuesta por un grupo de voluntarios unidos por el amor hacia los animales y la convicción de que, juntos, podemos hacer mucho por ellos. </p>
            <p>Esta iniciativa fue creada con el objetivo de facilitar todo lo posible la búsqueda de nuestras mascotas cuando éstas se encuentran extraviadas. </p>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = ContactUs
