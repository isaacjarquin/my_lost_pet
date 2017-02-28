const alertsReducer = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    alert: {
      type: action.value.type,
      message: action.value.message,
      visible: action.value.visible
    }
  })
  return newState
}


module.exports = { alertsReducer }
