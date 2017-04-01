const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./alerts.scss')
}

class Alerts extends React.Component {
  render () {
    return (
      <div>
        <div className={`alert ${this.props.type} ${this.props.visible} w3-center`}>
          {this.props.message}
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

Alerts.propTypes = {
  alert: object
}

module.exports = Alerts
