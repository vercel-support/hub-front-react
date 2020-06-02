export const fetchShippingData = async (reqBody) => {
  fetch('http://localhost:3000/api/V2/logistic/shipping', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  })
    .then((response) => response.json())
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const fetchCartData = async (reqBody) => {
  console.log(reqBody);
  fetch('http://localhost:3000/api/V2/cart', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status != 200) {
        return 'Falha para obter dados dos produtos.';
      } else {
        return response.data
      }
    })
    .catch((err) => {
      return err;
    });
};
