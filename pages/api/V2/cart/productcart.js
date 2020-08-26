export default (req, res) => {
    const productcart = [
        {
            sku: "7891000623008",
            name: "NESTLÉ PURINA DOGUITOS Petisco para Cães Bifinho Carne 65g",
            image: "/d/o/doguitos-carne.jpg",
            quantity: 0,
            price: 4.9,
        },
        {
            sku: "7891000623008",
            name: "NESTLÉ PURINA DOGUITOS Petisco para Cães Bifinho Carne 65g",
            image: "/d/o/doguitos-carne.jpg",
            quantity: 0,
            price: 4.9,
        },
        {
            sku: "7891000623008",
            name: "NESTLÉ PURINA DOGUITOS Petisco para Cães Bifinho Carne 65g",
            image: "/d/o/doguitos-carne.jpg",
            quantity: 0,
            price: 4.9,
        },
        {
            sku: "7891000623008",
            name: "NESTLÉ PURINA DOGUITOS Petisco para Cães Bifinho Carne 65g",
            image: "/d/o/doguitos-carne.jpg",
            quantity: 0,
            price: 4.9,
        },
      ];

  res.statusCode = 200;
  res.json(productcart);
};
