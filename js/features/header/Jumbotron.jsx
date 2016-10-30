const React = require('react')

const Jumbotron = React.createClass({
  render () {
    return (
      <div className="jumbotron">
        <div className="container text-center">
          <h1>My Lost Pet</h1>
          <p>Help us to find your missing friends</p>
        </div>
      </div>
    )
  }
})

module.exports = Jumbotron
