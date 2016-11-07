const React = require('react')
const { string, arrayOf, func } = React.PropTypes
const { connector } = require('../../Store')

if (process.env.WEBPACK_BUILD) {
  require('./dropdown.scss')
}

const Dropdown = React.createClass({
  propTypes: {
    dropDownTypes: arrayOf(string),
    dropDownTitle: string,
    selectFilter: string,
    setSelectFilter: func
  },
  getDefaultProps: function () {
    return { petTypes: [] }
  },
  handleOnChangeDropdown: function (event) {
    this.props.setSelectFilter(event.target.value)
  },
  render () {
    return (
      <div className='dropdown pet-type'>
        <select className="form-control" onChange={this.handleOnChangeDropdown}>
          {this.props.dropDownTypes.map((dropDownType) => (
            <option value={dropDownType}>{dropDownType}</option>
          ))}
        </select>
      </div>
    )
  }
})

module.exports = connector(Dropdown)
