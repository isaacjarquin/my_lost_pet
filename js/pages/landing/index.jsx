const React = require('react')
const { hashHistory } = require('react-router')
const { Link } = require('react-router')
const { connector } = require('../../Store')
const Dropdown = require('../../features/dropdown/Dropdown')

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
    const petTypes = [{pet: 'dog', id: 1}, {pet: 'cat', id: 2}, {pet: 'rabit', id: 3}]

    return (
      <div className='home-info'>
        <ul className='w3-navbar w3-black w3-hide-small'>
          <li className='w3-left'><a href='#'>Home<i /></a></li>
          <li className='w3-left'><a href='#'>About us<i /></a></li>
          <li className='w3-right'><a href='#'><i className='fa fa-facebook-official' /></a></li>
          <li className='w3-right'><a href='#'><i className='fa fa-twitter' /></a></li>
          <li className='w3-right'><a href='#'><i className='fa fa-search' /></a></li>
        </ul>
        <header className='w3-display-container w3-wide' id='home'>
          <img className='w3-image' src='../../../public/mascotas_y_personas.jpg' alt='Fashion Blog' width='1600' height='1060' />

          <div className='w3-display-left w3-padding-xlarge'>
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
                <Dropdown dropDownTypes={petTypes} dropDownTitle={'Pet type '} />
              </form>
              <Link to='/search'><h6><button className='w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6></Link>
            </div>

            <div className='looking-for-home'>
              <h1 className='w3-text-white'>Dale un hogar</h1>
              <form onSubmit={this.gotoSearch}>
                <p><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='w3-input w3-border' type='text' placeholder='Actualmente en' /></p>
                <Dropdown dropDownTypes={petTypes} dropDownTitle={'Pet type '} />
              </form>
              <Link to='/search'><h6><button className='w3-btn w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off'>Buscar</button></h6></Link>
            </div>

          </div>
        </header>

        <header className='w3-container w3-center w3-padding-48 w3-light-grey'>
          <h1 className='w3-xxxlarge'><b>About us</b></h1>
          <h6>Te ayudamos a buscarlo, porque el haria lo mismo por ti</h6>
        </header>

        <footer className='w3-container w3-grey w3-center w3-padding-xlarge'>
          <p>Copyright <a href='http://www.w3schools.com/w3css/default.asp' target='_blank'>@mylostpet</a></p>
        </footer>
      </div>
    )
  }
}

const { func, string } = React.PropTypes

Landing.propTypes = {
  searchTerm: string,
  setSearchTerm: func
}

module.exports = connector(Landing)
