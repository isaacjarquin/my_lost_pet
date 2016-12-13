const React = require('react')

const Jumbotron = React.createClass({
  render () {
    return (
      <div className='jumbotron'>
        <div className='container text-center brand-name'>
          <h1>My Lost Pet</h1>
        </div>
      </div>
    )
  }
})

module.exports = Jumbotron
