const React = require('react')
const Dropdown = require('../dropdown/Dropdown')
const { func, string } = React.PropTypes
const { connector } = require('../../Store')

const Navbar = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    const petTypes = [{pet: 'dog', id: 1}, {pet: 'cat', id: 2}, {pet: 'rabit', id: 3}]
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
              <li><Dropdown dropDownTypes={petTypes} dropDownTitle={'Pet type '} /></li>
              <li><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='form-control' type='text' placeholder='Pet Location' /></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = connector(Navbar)
