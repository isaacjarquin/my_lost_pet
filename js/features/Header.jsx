const React = require('react')
const { Link } = require('react-router')
const { func, string } = React.PropTypes
const { connector } = require('../Store')

const Header = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>My lost pet</Link>
        </h1>
        <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='search-input' type='text' placeholder='Search' />
      </header>
    )
  }
})

module.exports = connector(Header)
