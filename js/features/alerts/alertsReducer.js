const alertsReducer = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    alert: {
      type: action.value.alert.type,
      message: action.value.alert.message,
      visible: action.value.alert.visible
    }
  })

  return newState
}


module.exports = alertsReducer
