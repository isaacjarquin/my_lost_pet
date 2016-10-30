const React = require('react')
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
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">My lost pet</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='search-input' type='text' placeholder='Search' /></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

module.exports = connector(Navbar)
