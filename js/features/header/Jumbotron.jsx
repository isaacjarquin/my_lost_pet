const React = require('react')
const { Link } = require('react-router')

const Jumbotron = React.createClass({
  render () {
    return (
      <div className='jumbotron'>
        <div className='container text-center brand-name'>
          <Link to={'/'}><h1>My Lost Pet</h1></Link>
        </div>
      </div>
    )
  }
})

module.exports = Jumbotron
