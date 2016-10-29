const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./layout.scss')
}

const Layout = (props) => (
  <div className="container app-container">
    <div className="row">
			lol
    </div>
    <div className="row">
			{props.children}
    </div>
    <div className="row">
      <div className="col-md-4">
        One of three columns
      </div>
      <div className="col-md-4">
        One of three columns
      </div>
      <div className="col-md-4">
        One of three columns
      </div>
    </div>
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
