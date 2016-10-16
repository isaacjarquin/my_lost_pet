const React = require('react')
const data = require('../public/mockData')
const MissingPet = require('./MissingPet')

const Search = () => (
  <div className='container'>
    {data.pets.map((pet) => (
      <MissingPet {...pet} key={pet.id} />
    ))}
  </div>
)

module.exports = Search
