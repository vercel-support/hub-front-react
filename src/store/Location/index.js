export const reducer = (state, action) => {
  const [type, payload] = action;
  switch (type) {
    case "TESTE":
      console.log(type, payload, state);
      return { ...state, teste: payload };
    default:
      return state;
  }
};

export const addTeste = (payload) => {
  dispatch({
    type: "TESTE",
    payload,
  });
};
