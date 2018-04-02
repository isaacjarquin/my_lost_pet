import { TwitterButton, FacebookButton, RedditButton, GooglePlusButton, LinkedInButton, EmailButton } from 'react-social'
const SideBarNavigation = require('./sideBarNavigation')

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
        <li className='w3-left'><a href='/'>Inicio<i /></a></li>
        <li className='w3-right'>
          <SideBarNavigation />
        </li>
      </ul>
    )
  }
})

module.exports = TopNavigationBar
