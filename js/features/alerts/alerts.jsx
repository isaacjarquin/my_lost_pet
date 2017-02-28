const React = require('react')
const { connector } = require('../../Store')


if (process.env.WEBPACK_BUILD) {
  require('./alerts.scss')
}

class Alerts extends React.Component {
  render () {
    return (
      <div>
        <div className={`alert ${this.props.alert.type} ${this.props.alert.visible} w3-center`}>
          {this.props.alert.message}
        </div>
      </div>
    )
  }
}

const { object, func } = React.PropTypes

Alerts.propTypes = {
  alert: object
}

module.exports = connector(Alerts)
