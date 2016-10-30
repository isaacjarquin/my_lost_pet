const React = require('react')
const Header = require('../features/header/Header')
const Footer = require('../features/footer/Footer')

if (process.env.WEBPACK_BUILD) {
  require('./layout.scss')
}

const Layout = (props) => (
  <div className="container app-container">
    <div className="row">
      <Header />
    </div>
    <div className="row">
			{props.children}
    </div>
    <div className="row">
      <Footer />
    </div>
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
