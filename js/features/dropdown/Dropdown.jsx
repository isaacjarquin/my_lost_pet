const React = require('react')
const { string, arrayOf, func, object } = React.PropTypes

const Dropdown = React.createClass({
  propTypes: {
    dropDownTypes: arrayOf(object),
    dropDownTitle: string,
    selectFilter: string,
    setSelectFilter: func,
    searchTerm: string,
    pets: arrayOf(object),
    dropDownOptions: arrayOf(object)
  },
  getDefaultProps: function () {
    return { petTypes: [] }
  },
  handleOnChangeDropdown: function (event) {
    this.props.setSelectFilter(
      this.props.searchTerm,
      this.props.locationFilter,
      this.props.pets,
      event.target.value
  )
  },
  render () {
    return (
      <div className='dropdown pet-type'>
        <select className='form-control' onChange={this.handleOnChangeDropdown} >
          <option selected="selected" disabled>{this.props.dropDownTitle}</option>
          <option key={0} />
          {this.props.dropDownOptions.map((dropDownOption) => (
            <option value={dropDownOption.value} key={dropDownOption.id}>{dropDownOption.value}</option>
          ))}
        </select>
      </div>
    )
  }
})

module.exports = Dropdown
