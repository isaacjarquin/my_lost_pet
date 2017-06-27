const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./error.scss')
}

class Error extends React.Component {
  render () {
    const {field, message} = this.props

    return (
      <div>
        <div className={`validation-error ${field}`}>
          {message}
        </div>
      </div>
    )
  }
}

const { string } = React.PropTypes

Error.propTypes = {
  message: string,
  field: string
}

module.exports = Error
