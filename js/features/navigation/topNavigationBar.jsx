import { TwitterButton, FacebookButton, RedditButton, GooglePlusButton, LinkedInButton, EmailButton } from 'react-social'

const React = require('react')
const { string } = React.PropTypes

const TopNavigationBar = React.createClass({
  propTypes: {
    twitter: string.isRequired,
    facebook: string.isRequired
  },
  render () {
    return (
      <ul className='w3-navbar w3-black w3-hide-small'>
        <li className='w3-left'><a href='/'>Home<i /></a></li>
        <li className='w3-right'>
          <TwitterButton
            url={this.hostUrl}
            appId={this.props.twitter}
            className={'fa fa-twitter my-social-icons'}
            />
        </li>
        <li className='w3-right'>
          <FacebookButton
            url={this.hostUrl}
            appId={this.props.facebook}
            className={'fa fa-facebook my-social-icons'}
            />
        </li>
        <li className='w3-right'>
          <RedditButton
            url={this.hostUrl}
            className={'fa fa-reddit my-social-icons'}
            />
        </li>
        <li className='w3-right'>
          <GooglePlusButton
            url={this.hostUrl}
            className={'fa fa-google my-social-icons'}
            />
        </li>
        <li className='w3-right'>
          <LinkedInButton
            url={this.hostUrl}
            className={'fa fa-linkedin my-social-icons'}
            />
        </li>
        <li className='w3-right'>
          <EmailButton
            url={this.hostUrl}
            className={'fa fa-envelope-o my-social-icons'}
            />
        </li>
      </ul>
    )
  }
})

module.exports = TopNavigationBar
