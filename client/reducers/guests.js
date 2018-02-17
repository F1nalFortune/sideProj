const guests = (state = [], action) => {
  switch(action.type) {
    case 'GET_GUESTS':
      return action.guests || []
    case 'ADD_GUESTS':
      return [
        ...state,
        {
          id: action.id, 
          first: action.first, 
          last: action.last,
          email: action.email,
          condition: action.condition,
          party: action.party
        }
      ]
    default:
      return state

  }
}

export default guests;
