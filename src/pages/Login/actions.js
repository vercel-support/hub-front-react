function setEmail(email) {
  return {
    type: 'SET_EMAIL',
    email,
  };
}
function setPassword(password) {
  return {
    type: 'SET_PASSWORD',
    password,
  };
}
function login() {
  return {
    type: 'LOGIN',
  };
}
function logoff() {
  return {
    type: 'LOGOFF',
  };
}
function emailAvailable() {
  return {
    type: 'EMAIL_AVAILABLE',
  };
}
function emailNotAvailable() {
  return {
    type: 'EMAIL_NOT_AVAILABLE',
  };
}
function setFirsName(fname) {
  return {
    type: 'SET_FIRST_NAME',
    fname
  };
}
function setLastName(lname) {
  return {
    type: 'SET_LAST_NAME',
    lname
  };
}
function setCPF(cpf) {
  return {
    type: 'SET_CPF',
    cpf
  };
}
function setMobileNumber(mobile) {
  return {
    type: 'SET_MOBILE_NUMBER',
    mobile
  };
}


export const loginActions = {
  setEmail,
  setPassword,
  login,
  logoff,
  emailAvailable,
  emailNotAvailable,
  setFirsName,
  setLastName,
  setCPF,
  setMobileNumber,
};
