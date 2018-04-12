const React = require('react')
const { connector } = require('../../Store')
var MediaQuery = require('react-responsive')
const Desktop = require('./desktop')
const Mobile = require('./mobile')

class Landing extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div>
        <MediaQuery minDeviceWidth={768}>
          <Desktop props={this.props} />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={767}>
          <Mobile props={this.props} />
        </MediaQuery>
      </div>
    )
  }
}



module.exports = connector(Landing)
