const React = require('react')

const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = (props) => (
  <div>
    <h1 style={{color: props.color}}>
      {props.title}
    </h1>
  </div>
)

const { string } = React.PropTypes

MyTitle.propTypes = {
  color: string.isRequired,
  title: string.isRequired
}

module.exports = MyTitle
