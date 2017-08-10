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
    searchTerm: string.isRequired,
    selectFilter: string.isRequired,
    urls: object.isRequired,
    activePagePets: arrayOf(object)
  },
  addPetRows: function (pets) {
    let petRows = []
    let row = {}

    this.pairwise(pets, function (current, next) {
      if (next !== undefined) {
        row = {left: current, right: next}
      } else {
        row = {left: current, right: {id: undefined}}
      }

      petRows.push(row)
    })

    return petRows
  },
  pairwise: function (arr, func) {
    for (var i = 0; i <= arr.length - 1; i += 2) {
      func(arr[i], arr[i + 1])
    }
  },
  renderNoResultsFound: function () {
    return (
      <div>
        <div className='tablet-no-results_big'>Su búsqueda no generó ningún resultado.</div>
        <div><AnimatedHusky /></div>
        <div className='tablet-no-results_small'>Vuelva a la página de inicio e intente una nueva búsqueda con una combinación de filtros diferente.</div>
      </div>
    )
  },
  renderFoundsResults: function () {
    return (
      this.addPetRows(this.props.activePagePets)
        .map((pet) => (
          <div className='pets-row'>
            {[pet.left, pet.right]
              .map((pet) => (<MissingPet {...pet} colSizeClass={'col-sm-5'} key={pet.id} />))
            }
            <ContactDetailsPanel
              {...this.props.owner}
              id={pet.left.id}
              arrow={'arrow-up-left'}
              colSizeClass={'.col-sm-5'}
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
              colSizeClass={'.col-sm-5'}
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
    )
  },
  renderPetsData () {
    if (this.props.activePagePets.length === 0) {
      return this.renderNoResultsFound()
    } else {
      return this.renderFoundsResults()
    }
  },
  render () {
    return (<div>{this.renderPetsData()}</div>)
  }
})

module.exports = connector(Search)
