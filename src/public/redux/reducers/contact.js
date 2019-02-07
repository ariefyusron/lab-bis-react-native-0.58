const initialState = {
  name:'',
  isLogin: false,
  contacts: []
}

const contactReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {...state, name: action.payload, isLogin: true}
    case 'ADD_CONTACT':
      return {...state, contacts:[...state.contacts, action.payload]}
    default:
      return state;
  }
};

export default contactReducer;