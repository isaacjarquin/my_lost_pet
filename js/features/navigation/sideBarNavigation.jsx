const React = require('react')
const $ = require('jquery')

if (process.env.WEBPACK_BUILD) {
    require('./sideBarNavigation.scss')
}

const SideBarNavigation = React.createClass({
    openSideNav() {
        $('#mySidenav').addClass('sideNavWidth')
    },
    closeSideNav() {
        $('#mySidenav').removeClass('sideNavWidth')
    },
    render() {
        return (
            <nav className='navbar-inverse top-right'>
                <i class="material-icons w3-white"></i>
                <button type='button' onClick={this.openSideNav}>
                    <span className="openNaveIcon">&#9776;</span>
                </button>

                <div id="mySidenav" className="sidenav">
                    <button type='button' onClick={this.closeSideNav}>
                        <span className="closebtn">&times;</span>
                    </button>
                    <a href="#">Encontraste una mascota perdida ?</a>
                    <a href="#">Quienes somos</a>
                    <a href="#">Como usar la aplicacion</a>
                    <a href="#">Contacto</a>
                    <a href="#">Terminos y condiciones</a>
                </div>
            </nav>
        )
    }
})

module.exports = SideBarNavigation
