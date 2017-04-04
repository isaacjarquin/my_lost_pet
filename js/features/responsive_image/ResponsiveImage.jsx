const React = require('react')
var MediaQuery = require('react-responsive')

class ResponsiveImage extends React.Component {
  constructor (props) {
    super(props)

    this.desktopImageUrl = this.desktopImageUrl.bind(this)
    this.tabletImageUrl = this.tabletImageUrl.bind(this)
    this.mobileImageUrl = this.mobileImageUrl.bind(this)
  }

  desktopImageUrl ({url}) {
    const imageProperties = 'w_300,h_440,c_fill,g_south'
    const splitedUrl = url.split('upload')

    return (splitedUrl[0] + 'upload/' + imageProperties + splitedUrl[1])
  }

  tabletImageUrl ({url}) {
    const imageProperties = 'w_300,h_340,c_fill,g_south'
    const splitedUrl = url.split('upload')

    return (splitedUrl[0] + 'upload/' + imageProperties + splitedUrl[1])
  }

  mobileImageUrl ({url}) {
    const imageProperties = 'w_300,h_340,c_fill,g_south'
    const splitedUrl = url.split('upload')

    return (splitedUrl[0] + 'upload/' + imageProperties + splitedUrl[1])
  }

  render () {
    return (
      <div className={this.props.className}>
        <MediaQuery minDeviceWidth={1200}>
          <img src={this.desktopImageUrl(this.props)} className='img-responsive' alt='Image' />
        </MediaQuery>
        <MediaQuery minDeviceWidth={768} maxDeviceWidth={1200}>
          <img src={this.tabletImageUrl(this.props)} className='img-responsive' alt='Image' />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={736}>
          <img src={this.mobileImageUrl(this.props)} className='img-responsive' alt='Image' />
        </MediaQuery>
      </div>
    )
  }
}

const { string } = React.PropTypes

ResponsiveImage.propTypes = {
  url: string.isRequired,
  className: string.isRequired
}

module.exports = ResponsiveImage
