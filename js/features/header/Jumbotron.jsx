const React = require('react')
import GoogleMapReact from 'google-map-react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
var MediaQuery = require('react-responsive')
const $ = require('jquery')

const Marker = ({ icon, onClick, onMouseOver, onMouseLeave }) => {
  return (
    <button onMouseOver={() => onMouseOver()} onMouseLeave={() => onMouseLeave()} onClick={() => onClick()}>
      <div>{icon}</div>;
    </button>
  )
}

class Jumbotron extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      map: {
        lat: 40.4167754,
        lng: -3.7037901999999576,
        zoom: 5
      }
    }
  }

  renderEmptyMap() {
    const { pets } = this.props

    return (
      <GoogleMapReact
        zoom={2}
        center={{ lat: 40.4167754, lng: -3.7037901999999576 }}
      >
      </GoogleMapReact>
    )
  }

  handleMarkerOnClick(pet) {
    console.log('pet: ', pet)
  }

  handleMarkerOnMouseOver({id, petStatus}) {
    const petId = 'item-' + id
    const selectedId = '#' + petId
  
    $(selectedId).addClass(`${petStatus}-pet-selected`)
  }

  handleMarkerOnMouseLeave({ id, petStatus }) {
    const petId = 'item-' + id
    const selectedId = '#' + petId

    $(selectedId).removeClass(`${petStatus}-pet-selected`)
  }

  getIconColor({ petStatus }) {
    const colors = {
      lost: "orange",
      found: "yellowgreen",
      adoption: "dodgerblue"
    }

    return colors[petStatus];
  }

  renderMapWithResults() {
    const { pets } = this.props

    return (
      <GoogleMapReact
        zoom={5}
        center={{ lat: pets[0].latitud, lng: pets[0].longitud }}
      >
        {pets.map((pet) => {
          return (
            <Marker
              lat={pet.latitud}
              lng={pet.longitud}
              icon={<FaMapMarker size={25} color={this.getIconColor(pet)} />}
              onClick={() => this.handleMarkerOnClick(pet)}
              onMouseOver={() => this.handleMarkerOnMouseOver(pet)}
              onMouseLeave={() => this.handleMarkerOnMouseLeave(pet)}
            />
          )
        })}
      </GoogleMapReact>
    )
  }

  render() {
    const { map } = this.state
    const { pets } = this.props

    return (
      <MediaQuery minDeviceWidth={768}>
        <div className='jumbotron'>
            { pets.length > 0 ? this.renderMapWithResults() : this.renderEmptyMap() }
        </div>
      </MediaQuery>
    )
  }
}

module.exports = Jumbotron
