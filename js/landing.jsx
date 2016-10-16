const React = require('react')
const MyTitle = require('./MyTitle')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <MyTitle title='My lost pet' color='rebeccapurple' />
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Brouse All</button>
    </div>
  </div>
)

module.exports = Landing
