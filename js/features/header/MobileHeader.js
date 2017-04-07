const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./mobileHeader.scss')
}

const MobileHeader = React.createClass({
  render () {
    return (
      <nav className='movile-header navbar navbar-inverse w3-black'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <div className='mobile-home'><a href='/'>Home<i /></a></div>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myTopNavbar'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
          </div>
          <div className='collapse navbar-collapse mobile-social' id='myTopNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'><i className='fa fa-facebook-official' />Facebook</a></li>
              <li><a href='#'><i className='fa fa-twitter' />Twitter</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = MobileHeader
