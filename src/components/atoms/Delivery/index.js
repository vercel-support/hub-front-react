import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Input,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { DeliveryStyles } from "./styles";

const Delivery = ({ icon, end, setCep }) => {
  const [openForm, setOpenForm] = useState(false);
  const { register, handleSubmit } = useForm();

  const pesquisacep = (valor) => {
    const cep = valor.replace(/\D/g, "");

    if (cep != "") {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        setCep(cep);
        localStorage.setItem("postalcode-delivery", cep);
      } else {
        alert("Formato de CEP inválido.");
      }
    }
  };

  const onSubmit = (data) => {
    pesquisacep(data.cep);
  };

  return (
    <DeliveryStyles>
      <List>
        <ListItem>
          <ListItemAvatar>{icon}</ListItemAvatar>
          <ListItemText
            onClick={() => setOpenForm(!openForm)}
            secondary="(alterar cep)"
          >
            Entregar no <span>{end}</span>
          </ListItemText>
        </ListItem>
        {openForm && (
          <ListItem>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                style={{
                  marginBottom: "20px",
                }}
                name="cep"
                inputRef={register}
                placeholder="00000-000"
              />
              <button type="submit">Alterar</button>
            </form>
          </ListItem>
        )}
      </List>
    </DeliveryStyles>
  );
};

export default Delivery;
