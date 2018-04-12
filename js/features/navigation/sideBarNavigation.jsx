const React = require('react')
const $ = require('jquery')

if (process.env.WEBPACK_BUILD) {
    require('./sideBarNavigation.scss')
}

const SideBarNavigation = React.createClass({
    componentDidMount() {
        $('.landing-top').click(() => {
            $('html, body').animate({
                scrollTop: $('.landing-top-section').offset().top
            }, 1000);
        });
        $('.add-pet').click(() => {
            $('html, body').animate({
                scrollTop: $('.add-pet-section').offset().top
            }, 1000);
        });
        $('.about-us').click(() => {
            $('html, body').animate({
                scrollTop: $('.about-us-section').offset().top
            }, 1000);
        });
        $('.how-to-use').click(() => {
            $('html, body').animate({
                scrollTop: $('.how-to-use-section').offset().top
            }, 1000);
        });
        $('.contact').click(() => {
            $('html, body').animate({
                scrollTop: $('.contact-section').offset().top
            }, 1000);
        });
        $('.terms-and-condition').click(() => {
            $('html, body').animate({
                scrollTop: $('.terms-and-condition-section').offset().top
            }, 1000);
        });
    },
    openSideNav() {
        $('#mySidenav').css('right', '0px');
    },
    closeSideNav() {
        $('#mySidenav').css('right', '-300px');
    },
    render() {
        return (
            <nav className='top-right'>
                <i class="material-icons w3-white"></i>
                <button type='button' onClick={this.openSideNav}>
                    <span className="openNaveIcon">&#9776;</span>
                </button>

                <div id="mySidenav" className="sidenav sideNavWidth">
                    <button type='button' onClick={this.closeSideNav}>
                        <span className="closebtn">&times;</span>
                    </button>
                    <a href="#" className="landing-top">Inicio</a>
                    <a href="#" className="add-pet">Añadir mascota</a>
                    <a href="#" className="about-us">Quienes somos</a>
                    <a href="#" className="how-to-use">Como usar la aplicacion</a>
                    <a href="#" className="contact">Contacto</a>
                    <a href="#" className="terms-and-condition">Terminos y condiciones</a>
                </div>
            </nav>
        )
    }
})

module.exports = SideBarNavigation