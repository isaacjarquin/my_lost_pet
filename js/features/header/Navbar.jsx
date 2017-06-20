const React = require('react')
const Dropdown = require('../dropdown/Dropdown')
const { func, string, arrayOf, object } = React.PropTypes

const Navbar = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func,
    setSelectFilter: func,
    selectFilter: string,
    pets: arrayOf(object)
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(
      event.target.value,
      this.props.locationFilter,
      this.props.pets,
      this.props.selectFilter
  )
  },
  handleLocationSearchTermEvent (event) {
    this.props.setSearchTerm(
      this.props.searchTerm,
      event.target.value,
      this.props.pets,
      this.props.selectFilter
  )
  },
  render () {
    const dropDownOptions = [
      {value: 'pequeno', id: 1},
      {value: 'mediano', id: 2},
      {value: 'grande', id: 3},
      {value: 'gigante', id: 4}
    ]
    return (
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle w3-dark-grey search-filter' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar w3-white' />
              <span className='icon-bar w3-white' />
              <span className='icon-bar w3-white' />
            </button>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li><input value={this.props.locationFilter} onChange={this.handleLocationSearchTermEvent} className='form-control pet-location' type='text' placeholder='Ciudad/Municipio' /></li>
              <li><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='form-control pet-location' type='text' placeholder='Raza' /></li>
              <li>
                <Dropdown
                  dropDownOptions={dropDownOptions}
                  dropDownTitle={'Tamaño'}
                  setSelectFilter={this.props.setSelectFilter}
                  searchTerm={this.props.searchTerm}
                  locationFilter={this.props.locationFilter}
                  pets={this.props.pets}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar
