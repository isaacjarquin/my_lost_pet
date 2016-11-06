const React = require('react')
const { Link } = require('react-router')

const Jumbotron = React.createClass({
  render () {
    return (
      <div className='jumbotron'>
        <div className='container text-center'>
          <Link to={'/'}>
            <h1>My Lost Pet</h1>
            <p>Help us to find your missing friends</p>
          </Link>
        </div>
      </div>
    )
  }
})

module.exports = Jumbotron
