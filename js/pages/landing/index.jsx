const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('../../Store')
const Dropdown = require('../../features/dropdown/Dropdown')
const TermsAndConditions = require('../../features/terms_and_conditions/termsAndConditions')
const ContactUs = require('../../features/contact_us/contactUs')
const AboutUs = require('../../features/about_us/aboutUs')
const Footer = require('../../features/footer/Footer')
const NewPetFound = require('../../features/new_pet_found/NewPetFound')

import { TwitterButton } from 'react-social'

if (process.env.WEBPACK_BUILD) {
  require('./index.scss')
}

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  gotoSearch (event) {
    hashHistory.push('search')
    event.preventDefault()
  }
  render () {
    const petTypes = [{pet: 'perro', id: 1}, {pet: 'gato', id: 2}, {pet: 'conejo', id: 3}]
    const url = process.env.HOST_URL
    const twitterAppId = process.env.TWITTER_KEY

    return (
      <div className='home-info'>
        <ul className='w3-navbar w3-black w3-hide-small'>
          <li className='w3-left'><a href='/'>Home<i /></a></li>
          <li className='w3-right'>
            <TwitterButton url={url} appId={twitterAppId} className={'fa fa-twitter my-social-icons'} />
          </li>
        </ul>
        <header className='w3-display-container w3-wide' id='home'>
          <img className='w3-image' src='../../../public/mascotas_y_personas.jpg' alt='Fashion Blog' width='1600' height='1060' />

          <div className='pet-filter w3-display-left w3-padding-xlarge'>
            <div className='small-nav-menu'>
              <ul className='w3-navbar w3-black w3-hide-small small-nav-menu'>
                <li className='active'><a href='#'>Perdidos</a></li>
                <li><a href='#'>Buscando casa</a></li>
              </ul>
            </div>

            <h1 className='w3-jumbo w3-text-white w3-hide-small'><b>My lost pet</b></h1>

            <div className='lost'>
              <h1 className='w3-text-white'>Encuentralo con nosotros</h1>
              <form onSubmit={this.gotoSearch}>
                <p><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='w3-input w3-border' type='text' placeholder='Encontrado en' /></p>
                <Dropdown dropDownTypes={petTypes} dropDownTitle={'Pet type '} setSelectFilter={this.props.setSelectFilter} />
              </form>
              <Link to='/search'><h6><button className='w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6></Link>
            </div>

            <div className='looking-for-home'>
              <h1 className='w3-text-white'>Dale un hogar</h1>
              <form onSubmit={this.gotoSearch}>
                <p><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='w3-input w3-border' type='text' placeholder='Actualmente en' /></p>
                <Dropdown dropDownTypes={petTypes} dropDownTitle={'Pet type '} setSelectFilter={this.props.setSelectFilter} />
              </form>
              <Link to='/search'><h6><button className='w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6></Link>
            </div>

          </div>
        </header>

        <NewPetFound />

        <div className='panel-group' id='accordion'>
          <AboutUs />
          <ContactUs
            {...this.props.contactUs}
            alert={this.props.alert}
            setAlerts={this.props.setAlerts}
            setContactUsName={this.props.setContactUsName}
            setContactUsEmail={this.props.setContactUsEmail}
            setContactUsMessage={this.props.setContactUsMessage}
            />
          <TermsAndConditions />
        </div>

        <Footer />
      </div>
    )
  }
}

const { func, string, object } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func,
  pet: object,
  setPetFounderName: func,
  setPetFounderEmail: func,
  setPetType: func,
  setPetSize: func,
  setPetFoundDate: func,
  setPetLocation: func,
  setPetDescription: func,
  setImageUrl: func,
  contactUs: object,
  alert: object,
  setContactUsName: func,
  setContactUsEmail: func,
  setContactUsMessage: func,
  setAlerts: func,
  setSelectFilter: func
}

module.exports = connector(Landing)
