import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

if (process.env.WEBPACK_BUILD) {
    require('./mapLocationSearchInput.scss')
}

export default class MapLocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    
        this.state = { address: '' }
    }

    handleChange (address) {
        this.setState({ address })
    }

    handleSelect (address) {
        const { handleLocationInput, handlePetLocation } = this.props

        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                handlePetLocation(address)
                return handleLocationInput(latLng)
            })
            .catch(error => console.error('Error', error))
    }

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Ciudad/Municipio',
                                className: 'location-search-input w3-input w3-border map-location'
                            }) }
                        />
                        <div className="autocomplete-dropdown-container">
                            {suggestions.map(suggestion => {
                                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div {...getSuggestionItemProps(suggestion, { className, style }) }>
                                        <span>{suggestion.description}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}
