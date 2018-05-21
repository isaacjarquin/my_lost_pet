const React = require('react')
import GoogleMapReact from 'google-map-react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

const Marker = ({ icon }) => <div>{icon}</div>;

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
        {pets.map((pet) => {
          return (
            <Marker
              lat={pet.latitud}
              lng={pet.longitud}
              icon={<FaMapMarker size={25} color={"orange"} />}
            />
          )
        })}
      </GoogleMapReact>
    )
  }

  renderMapWithResults() {
    const { pets } = this.props

    return (
      <GoogleMapReact
        zoom={15}
        center={{ lat: pets[0].latitud, lng: pets[0].longitud }}
      >
        {pets.map((pet) => {
          return (
            <Marker
              lat={pet.latitud}
              lng={pet.longitud}
              icon={<FaMapMarker size={25} color={"orange"} />}
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
      <div className='jumbotron'>
        { pets.length > 0 ? this.renderMapWithResults() : this.renderEmptyMap() }
      </div>
    )
  }
}

module.exports = Jumbotron
