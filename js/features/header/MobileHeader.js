const React = require('react')
const { string } = React.PropTypes
import { TwitterButton, FacebookButton } from 'react-social'

if (process.env.WEBPACK_BUILD) {
  require('./mobileHeader.scss')
}

const MobileHeader = React.createClass({
  propTypes: {
    facebook: string.isRequired,
    twitter: string.isRequired
  },
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
              <li>
                <FacebookButton
                  url={this.hostUrl}
                  appId={this.props.facebook}
                  className={'fa fa-facebook mobile-social-button'}
                  ><span className='mobile-social-button_text'>Facebook</span></FacebookButton>
              </li>
              <li>
                <TwitterButton
                  url={this.hostUrl}
                  appId={this.props.twitter}
                  className={'fa fa-twitter mobile-social-button'}
                  ><span className='mobile-social-button_text'>Twitter</span></TwitterButton>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = MobileHeader
