const reducerContactUsName = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    contactUs: {
      name: action.value,
      email: state.contactUs.email,
      message: state.contactUs.message
    }
  })
  return newState
}

const reducerContactUsEmail = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    contactUs: {
      name: state.contactUs.name,
      email: action.value,
      message: state.contactUs.message
    }
  })
  return newState
}

const reducerContactUsMessage = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    contactUs: {
      name: state.contactUs.name,
      email: state.contactUs.email,
      message: action.value
    }
  })
  return newState
}

module.exports = {
  reducerContactUsName,
  reducerContactUsEmail,
  reducerContactUsMessage
}
