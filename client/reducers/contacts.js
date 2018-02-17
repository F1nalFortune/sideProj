const contacts = (state = [], action) => {
  switch(action.type) {
    case 'GET_CONTACTS':
      return action.contacts || []
    case 'ADD_CONTACTS':
      return [
        ...state,
        {
          id: action.id, 
          name: action.name, 
          email: action.email,
          comment: action.comment
        }
      ]
    default:
      return state

  }
}

export default contacts;
