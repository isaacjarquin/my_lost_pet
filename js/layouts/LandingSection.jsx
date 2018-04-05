const React = require('react')

if (process.env.WEBPACK_BUILD) {
    require('./LandingSection.scss')
}

const LandingSection = React.createClass({
    render() {
        const {title, children, target} = this.props
        return (
            <div className={`landing-section ${target}`}>
                <div className="w3-center">
                    <h1><b>{title}</b></h1>
                </div>
                <div className="body">
                    {children}
                </div>
            </div>
        )
    }
})

module.exports = LandingSection
