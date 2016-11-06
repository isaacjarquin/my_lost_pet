const React = require('react')
const { string, arrayOf } = React.PropTypes

if (process.env.WEBPACK_BUILD) {
  require('./dropdown.scss')
}

const Dropdown = React.createClass({
  propTypes: {
    dropDownTypes: arrayOf(string),
    dropDownTitle: string
  },
  getDefaultProps: function () {
    return { petTypes: [] }
  },
  render () {
    return (
      <div className='dropdown pet-type'>
        <button className='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>
          {this.props.dropDownTitle}
          <span className='caret' />
        </button>
        <ul className='dropdown-menu'>
          {this.props.dropDownTypes.map((dropDownType) => (
            <li><a href='#'>{dropDownType}</a></li>
          ))}
        </ul>
      </div>
    )
  }
})

module.exports = Dropdown
