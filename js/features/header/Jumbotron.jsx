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
        zoom: 3
      }
    }
  }

  render() {
    const { map } = this.state
    const { pets } = this.props

    return (
      <div className='jumbotron'>
        <GoogleMapReact
          defaultCenter={{ lat: map.lat, lng: map.lng }}
          defaultZoom={map.zoom}
          zoom={map.zoom}
          center={{ lat: map.lat, lng: map.lng }}
        >
          {pets.map((pet) => {
            return (
              <Marker
                lat={pet.lat}
                lng={pet.lng}
                icon={<FaMapMarker size={25} color={"orange"} />}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    )
  }
}

module.exports = Jumbotron
