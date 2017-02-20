const reducerOwnerName = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: action.value,
      email: state.owner.email,
      phoneNumber: state.owner.phoneNumber,
      description: state.owner.description
    }
  })
  return newState
}

const reducerOwnerEmail = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: state.owner.name,
      email: action.value,
      phoneNumber: state.owner.phoneNumber,
      description: state.owner.description
    }
  })
  return newState
}

const reducerOwnerPhoneNumber = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: state.owner.name,
      email: state.owner.email,
      phoneNumber: action.value,
      description: state.owner.description
    }
  })
  return newState
}

const reducerDescription = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {
    owner: {
      name: state.owner.name,
      email: state.owner.email,
      phoneNumber: state.owner.phoneNumber,
      description: action.value
    }
  })
  return newState
}

module.exports = {
  reducerOwnerName,
  reducerOwnerEmail,
  reducerOwnerPhoneNumber,
  reducerDescription
}
