function setEmail(email) {
  return {
    type: 'SET_EMAIL',
    email,
  };
}
function setPasswordHash(passwordHash) {
  return {
    type: 'SET_PASSWORD_HASH',
    passwordHash,
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
function setFirsName(firstName) {
  return {
    type: 'SET_FIRST_NAME',
    firstName
  };
}
function setLastName(lastName) {
  return {
    type: 'SET_LAST_NAME',
    lastName
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
  setPasswordHash,
  login,
  logoff,
  emailAvailable,
  emailNotAvailable,
  setFirsName,
  setLastName,
  setCPF,
  setMobileNumber,
};
