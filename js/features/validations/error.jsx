const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./error.scss')
}

class Error extends React.Component {
  render () {
    const {field, visible, message} = this.props

    return (
      <div>
        <div className={`validation-error ${field}`}>
          {message}
        </div>
      </div>
    )
  }
}

const { string, bool } = React.PropTypes

Error.propTypes = {
  message: string,
  visible: bool
}

module.exports = Error
