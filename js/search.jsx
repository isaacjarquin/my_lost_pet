const React = require('react')
const pets = require('../public/mockData')

const Search = () => (
  <pre><code>
    {JSON.stringify(pets, null, 4)}
  </code></pre>
)

module.exports = Search
