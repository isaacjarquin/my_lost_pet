const React = require('react')
const MissingPet = require('../../../features/missing_pet/MissingPet')
const ContactDetailsPanel = require('../../../features/panels/ContactDetailsPanel')
const { connector } = require('../../../Store')
const { object, string, arrayOf, func } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    pets: arrayOf(object),
    owner: object.isRequired,
    alert: object.isRequired,
    setOwnerName: func.isRequired,
    setOwnerEmail: func.isRequired,
    setOwnerPhoneNumber: func.isRequired,
    setDescription: func.isRequired,
    setAlerts: func.isRequired,
    searchTerm: string,
    selectFilter: string,
    activePagePets: arrayOf(object)
  },
  render () {
    return (
      <div>
        {this.props.activePagePets
          .map((pet) => (
            <div className='pets-row'>
              <MissingPet {...pet} colSizeClass={'col-sm-6'} key={pet.id} />
              <ContactDetailsPanel
                {...this.props.owner}
                id={pet.id}
                arrow={'arrow-up-center'}
                colSizeClass={'.col-sm-6'}
                alert={this.props.alert}
                setAlerts={this.props.setAlerts}
                setOwnerName={this.props.setOwnerName}
                setOwnerEmail={this.props.setOwnerEmail}
                setOwnerPhoneNumber={this.props.setOwnerPhoneNumber}
                setDescription={this.props.setDescription}
                items_api={this.props.urls.items_api}
                />
            </div>)
          )
        }
      </div>
    )
  }
})

module.exports = connector(Search)
