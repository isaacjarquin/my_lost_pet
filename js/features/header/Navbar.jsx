const React = require('react')
const Dropdown = require('../dropdown/Dropdown')
const { func, string } = React.PropTypes

const Navbar = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func,
    setSelectFilter: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(
      event.target.value,
      this.props.pets,
      this.props.selectFilter
  )
  },
  render () {
    const petTypes = [{pet: 'perro', id: 1}, {pet: 'gato', id: 2}, {pet: 'conejo', id: 3}]
    return (
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
          </div>
          <div className='collapse navbar-collapse' id='myNavbar'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Dropdown
                  dropDownTypes={petTypes}
                  dropDownTitle={'Pet type '}
                  setSelectFilter={this.props.setSelectFilter}
                  searchTerm={this.props.searchTerm}
                  pets={this.props.pets}
                />
              </li>
              <li><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='form-control pet-location' type='text' placeholder='Pet Location' /></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar
