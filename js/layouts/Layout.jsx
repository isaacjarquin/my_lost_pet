const React = require('react')
const Header = require('../features/header/Header')
const Footer = require('../features/footer/Footer')
const { connector } = require('../Store')

const { element, object } = React.PropTypes

const Layout = React.createClass({
  propTypes: {
    children: element.isRequired,
    location: object.isRequired
  },
  displayHeader ({location, setSearchTerm, setSelectFilter, searchTerm}) {
    if (location.pathname === '/') {
      return null
    } else {
      return <div className='row'><Header location={location.pathname} setSearchTerm={setSearchTerm} setSelectFilter={setSelectFilter} searchTerm={searchTerm} /></div>
    }
  },
  displayFooter ({pathname}) {
    if (pathname === '/') {
      return null
    } else {
      return <Footer />
    }
  },
  render () {
    return (
      <div className='container app-container'>
        {this.displayHeader(this.props)}
        <div className='row'>
          {this.props.children}
        </div>
        {this.displayFooter(this.props.location)}
      </div>
    )
  }
})

module.exports = connector(Layout)
