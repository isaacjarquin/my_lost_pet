const React = require('react')
const Dropdown = require('../dropdown/Dropdown')
const { func, string, arrayOf, object } = React.PropTypes

const MobileNavbar = React.createClass({
    propTypes: {
        searchTerm: string,
        setSearchTerm: func,
        setSelectFilter: func,
        selectFilter: string,
        locationFilter: string,
        pets: arrayOf(object)
    },
    handleSearchTermEvent(event) {
        this.props.setSearchTerm(
            event.target.value,
            this.props.locationFilter,
            this.props.pets,
            this.props.selectFilter
        )
    },
    handleLocationSearchTermEvent(event) {
        this.props.setSearchTerm(
            this.props.searchTerm,
            event.target.value,
            this.props.pets,
            this.props.selectFilter
        )
    },
    render() {
        const dropDownOptions = [
            { value: 'pequeno', id: 1 },
            { value: 'mediano', id: 2 },
            { value: 'grande', id: 3 },
            { value: 'gigante', id: 4 }
        ]
        return (
            <div className='mobile-search-filters'>
                <ul className='nav navbar-nav navbar-right'>
                    <li><input value={this.props.locationFilter} onChange={this.handleLocationSearchTermEvent} className='form-control pet-location' type='text' placeholder='Ciudad/Municipio' /></li>
                    <li><input value={this.props.searchTerm} onChange={this.handleSearchTermEvent} className='form-control pet-location' type='text' placeholder='Raza' /></li>
                </ul>
            </div>
        )
    }
})

module.exports = MobileNavbar
