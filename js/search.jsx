const React = require('react')
const data = require('../public/mockData')

const Search = () => (
  <div className='container'>
    {data.pets.map((pet) => (
      <h3>{pet.description}</h3>
    ))}
  </div>
)

module.exports = Search
