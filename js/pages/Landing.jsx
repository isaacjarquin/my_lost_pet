const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='home-info'>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'> or Brouse All</Link>
  </div>
)

module.exports = Landing
