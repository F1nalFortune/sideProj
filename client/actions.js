import $ from 'jquery';





//GUEST ACTIONS
export const addGuests = (text) => {
  return (dispatch) => {
    fetch('/api/guests',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
      }
    )
    .then( res => res.json())
    .then( json => dispatch(guest('ADD_GUESTS', json)))
  }
}

//TODO
// export const fetchGuests = (id) => {
//   return (dispatch) => {
//     $.ajax({
//       url: `/api/guests`,
//       type: 'GET'
//     }).done( (guests) => {
//       dispatch(getGuests(guests));
//     }).fail(data => {
//       console.log(data);
//     });
//   }
// }

const getGuests = (guests) => {
  return {
    type: 'GET_GUESTS',
    guests
  }
}

const guest = (type, guest) => {
  return {
    type: type,
    id: guest._id,
    first: guest.first,
    last: guest.last,
    email: guest.email,
    party: guest.party
    
  }
}

//CONTACT ACTIONS
export const addContacts = (text) => {
  return (dispatch) => {
    fetch('/api/contacts',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
      }
    )
    .then( res => res.json())
    .then( json => dispatch(contact('ADD_CONTACTS', json)))
  }
}


export const fetchContacts = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/contacts`,
      type: 'GET'
    }).done( (contacts) => {
      dispatch(getContacts(contacts));
    }).fail(data => {
      console.log(data);
    });
  }
}

const getContacts = (contacts) => {
  return {
    type: 'GET_CONTACTS',
    contacts
  }
}

const contact = (type, contact) => {
  return {
    type: type,
    id: contact._id,
    name: contact.name,
    email: contact.email,
    comment: contact.comment
  }
}

//MAILER ACTIONS

export const addMailers = (text) => {
  return (dispatch) => {
    fetch('/api/mailers',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
      }
    )
    .then( res => res.json())
    .then( json => dispatch(mailer('ADD_MAILERS', json)))
  }
}

export const fetchMailers = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/mailers`,
      type: 'GET'
    }).done( (mailers) => {
      dispatch(getMailers(mailers));
    }).fail(data => {
      console.log(data);
    });
  }
}

const getMailers = (mailers) => {
  return {
    type: 'GET_MAILERS',
    mailers
  }
}

const mailer = (type, mailer) => {
  return {
    type: type,
    id: mailer._id,
    email: mailer.email,
  }
}
