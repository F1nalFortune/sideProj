const mailers = (state = [], action) => {
  switch(action.type) {
    case 'GET_MAILERS':
      return action.mailers || []
    case 'ADD_MAILERS':
      return [
        ...state,
        {
          id: action.id, 
          email: action.email
        }
      ]
    default:
      return state

  }
}

export default mailers;
