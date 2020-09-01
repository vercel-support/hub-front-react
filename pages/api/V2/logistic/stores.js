export default (req, res) => {
  const stores = [
    {
      id: "5e93468c43a61128433f1104Y",
      name: "Petshop do Leo",
      phone: "(11) 2222-2222",
      address: {
        postalCode: "18201-730",
        street: "Rua Pedro Antonio Samarco",
        state: "SP",
        complement: "",
        neighborhood: "Jardim Itália",
        city: "Itapetininga",
        number: "1",
        latitude: -23.5935332,
        longitude: -48.0400697,
      },
      distance: "78026",
    },
    {
      id: "5e8e1c6e43a61128433f0eedX",
      name: "Petland do Marco",
      phone: "(15) 3591-2542",
      address: {
        postalCode: "04650-140",
        street: "Rua José Neves",
        state: "SP",
        complement: "até 379/380",
        neighborhood: "Vila São Paulo",
        city: "São Paulo",
        number: "364",
        latitude: -23.65914,
        longitude: -46.6761561,
      },
      distance: "111054",
    },
  ];

  res.statusCode = 200;
  res.json(stores);
};
