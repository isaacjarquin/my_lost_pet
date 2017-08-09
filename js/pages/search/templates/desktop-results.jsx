const React = require('react')
const MissingPet = require('../../../features/missing_pet/MissingPet')
const ContactDetailsPanel = require('../../../features/panels/ContactDetailsPanel')
const AnimatedHusky = require('../../../features/animated_husky/animatedHusky')
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
    urls: object.isRequired,
    activePagePets: arrayOf(object)
  },
  addPetRows: function (pets) {
    let petRows = []
    let row = {}

    this.rowElements(pets, function (left, center, right) {
      if (center === undefined) {
        row = {left: left, center: {id: undefined}, right: {id: undefined}}
      } else if (right === undefined) {
        row = {left: left, center: center, right: {id: undefined}}
      } else {
        row = {left: left, center: center, right: right}
      }

      petRows.push(row)
    })

    return petRows
  },
  rowElements: function (arr, func) {
    for (var i = 0; i <= arr.length - 1; i += 3) {
      func(arr[i], arr[i + 1], arr[i + 2])
    }
  },
  renderNoResultsFound: function () {
    if (this.props.activePagePets.length === 0) {
      return (
        <div>
          <div className="no-results_big">Su búsqueda no generó ningun resultado.</div>
          <div><AnimatedHusky /></div>
          <div className="no-results_small">Pruebe con una combinación difirente de los filtros seleccionados.</div>
        </div>
      )
    }
  },
  render () {
    return (
      <div>
        {this.renderNoResultsFound()}
        {this.addPetRows(this.props.activePagePets)
          .map((pet) => (
            <div className='pets-row'>
              {[pet.left, pet.center, pet.right]
                .map((pet) => (<MissingPet {...pet} colSizeClass={'col-sm-3'} key={pet.id} />))
              }
              <ContactDetailsPanel
                {...this.props.owner}
                id={pet.left.id}
                arrow={'arrow-up-left'}
                colSizeClass={'.col-sm-3'}
                alert={this.props.alert}
                setAlerts={this.props.setAlerts}
                setOwnerName={this.props.setOwnerName}
                setOwnerEmail={this.props.setOwnerEmail}
                setOwnerPhoneNumber={this.props.setOwnerPhoneNumber}
                setDescription={this.props.setDescription}
                items_api={this.props.urls.items_api}
              />
              <ContactDetailsPanel
                {...this.props.owner}
                id={pet.center.id}
                arrow={'arrow-up-center'}
                colSizeClass={'.col-sm-3'}
                alert={this.props.alert}
                setAlerts={this.props.setAlerts}
                setOwnerName={this.props.setOwnerName}
                setOwnerEmail={this.props.setOwnerEmail}
                setOwnerPhoneNumber={this.props.setOwnerPhoneNumber}
                setDescription={this.props.setDescription}
                items_api={this.props.urls.items_api}
              />
              <ContactDetailsPanel
                {...this.props.owner}
                id={pet.right.id}
                arrow={'arrow-up-right'}
                colSizeClass={'.col-sm-3'}
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
