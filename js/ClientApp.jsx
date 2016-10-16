const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const App =  () => (
	<div className='app-container'>
		<div className='home-info'>
			<MyTitle title='My lost pet' color='rebeccapurple' />
			<input className='search' type='text' placeholder='Search' />
			<button className='browse-all'> or Brouse All</button>
		</div>
	</div>
)


ReactDOM.render(<App />, document.getElementById('app'))
