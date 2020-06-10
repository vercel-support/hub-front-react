const initialState = {
  isLogged: false,
  isEmailAvailable: false,
  register: {
    email: null,
    password: null,
    fname: null,
    lname: null,
    cpf: null,
    mobile: null,
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          email: action.email, 
      })});
    case 'SET_PASSWORD':
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          password: action.password, 
      })});
    case 'LOGIN':
      return Object.assign({}, state, {
        isLogged: true,
      });
    case 'LOGOFF':
      return Object.assign({}, state, {
        isLogged: false,
      });
    case 'EMAIL_AVAILABLE':
      return Object.assign({}, state, {
        isEmailAvailable: true,
      });
    case 'EMAIL_NOT_AVAILABLE':
      return Object.assign({}, state, {
        isEmailAvailable: false,
      });
    case 'SET_FIRST_NAME':
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          fname: action.fname, //todo fix it
      })});
    case 'SET_LAST_NAME':
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          lname: action.lname, //todo fix it
      })});
    case 'SET_CPF':
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          cpf: action.cpf, 
      })});
    case 'SET_MOBILE_NUMBER':
      return Object.assign({}, state, {
        register: Object.assign({}, state.register, {
          mobile: action.mobile, 
      })});
    default:
      return state;
  }
};
export default loginReducer;
