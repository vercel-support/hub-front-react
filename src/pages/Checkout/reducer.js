const initialState = {
  email: null,
  isLogged: false,
  isEmailAvailable: false,
  register: {
    passwordHash: null,
    firstName: null,
    lastName: null,
    cpf: null,
    mobileNumber: null,
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return Object.assign({}, state, {
        email: action.email,
      });
    case 'SET_PASSWORD_HASH':
      return Object.assign({}, state, {
        register: action.passwordHash, //todo fix it
      });
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
        register: action.firstName, //todo fix it
      });
    case 'SET_LAST_NAME':
      return Object.assign({}, state, {
        register: action.lastName, //todo fix it
      });
    case 'SET_CPF':
      return Object.assign({}, state, {
        register: action.cpf, //todo fix it
      });
    case 'SET_MOBILE_NUMBER':
      return Object.assign({}, state, {
        register: action.mobile, //todo fix it
      });
    default:
      return state;
  }
};
export default loginReducer;
