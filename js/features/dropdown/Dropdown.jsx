const React = require('react')
const { string, arrayOf, func, object } = React.PropTypes

const Dropdown = React.createClass({
  propTypes: {
    dropDownTypes: arrayOf(object),
    dropDownTitle: string,
    selectFilter: string,
    setSelectFilter: func
  },
  getDefaultProps: function () {
    return { petTypes: [] }
  },
  handleOnChangeDropdown: function (event) {
    this.props.setSelectFilter(
      this.props.searchTerm,
      this.props.pets,
      event.target.value
  )
  },
  render () {
    return (
      <div className='dropdown pet-type'>
        <select className='form-control' onChange={this.handleOnChangeDropdown}>
          <option disabled>Pet type</option>
          {this.props.dropDownTypes.map((dropDownType) => (
            <option value={dropDownType.pet} key={dropDownType.id}>{dropDownType.pet}</option>
          ))}
        </select>
      </div>
    )
  }
})

module.exports = Dropdown
