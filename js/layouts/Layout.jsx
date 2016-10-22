const React = require('react')
const Header = require('../features/Header')

const Layout = (props) => (
  <div className='app-container'>
    <Header title="My lost pet" />
    <img className="layout-background" src="public/pets-background.jpg" />
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
