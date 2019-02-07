const login = (data) => ({
  type: 'LOGIN',
  payload: data.name
});

const addContact = (data) => ({
  type: 'ADD_CONTACT',
  payload: data.name
});

export {
  login,
  addContact
}