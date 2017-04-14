import { TwitterButton, FacebookButton } from 'react-social'

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
      </ul>
    )
  }
})

module.exports = TopNavigationBar
