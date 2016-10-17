const React = require('react')
const MyTitle = require('../features/MyTitle')
const { Link } = require('react-router')

const Landing = () => (
  <div className='home-info'>
    <MyTitle title='My lost pet' color='rebeccapurple' />
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'> or Brouse All</Link>
  </div>
)

module.exports = Landing
