const React = require('react')

if (process.env.WEBPACK_BUILD) {
  require('./footer.scss')
}

const Footer = React.createClass({
  render () {
    return (
      <footer className='container-fluid text-center'>
        <p>My lost pet Copyright</p>
        <form className='form-inline'>Get deals:
          <input type='email' className='form-control' size='50' placeholder='Email Address' />
          <button type='button' className='btn btn-danger'>Sign Up</button>
        </form>
      </footer>
    )
  }
})

module.exports = Footer
