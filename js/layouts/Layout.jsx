const React = require('react')
const Header = require('../features/header/Header')
const Footer = require('../features/footer/Footer')
const { element, object } = React.PropTypes

const Layout = React.createClass({
  propTypes: {
    children: element.isRequired,
    location: object.isRequired
  },
  displayHeader ({pathname}) {
    if (pathname === '/') {
      return null
    } else {
      return <div className='row'><Header location={pathname} /></div>
    }
  },
  displayFooter ({pathname}) {
    if (pathname === '/') {
      return null
    } else {
      return <footer className='w3-container w3-grey w3-center w3-padding-xlarge'>@MyLostPet</footer>
    }
  },
  render () {
    return (
      <div className='container app-container'>
        {this.displayHeader(this.props.location)}
        <div className='row'>
          {this.props.children}
        </div>
        {this.displayFooter(this.props.location)}
      </div>
    )
  }
})

module.exports = Layout
