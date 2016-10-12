var React = require('react')
var ReactDOM = require('react-dom')

var div = React.DOM.div
var MyTitle = require('./MyTitle')
var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'My Lost Pet.'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
