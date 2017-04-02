const alertsReducer = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    alert: {
      type: action.value.alert.type,
      message: action.value.alert.message,
      visible: action.value.alert.visible,
      contactUs: action.value.alert.contactUs,
      newPetFound: action.value.alert.newPetFound
    }
  })

  return newState
}

module.exports = alertsReducer
