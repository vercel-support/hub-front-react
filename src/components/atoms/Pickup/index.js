import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Input,
} from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import PickupStyled from "./styles";

const Pickup = ({ pickupStore }) => (
    <PickupStyled>
      {
        pickupStore ?
        <List>
          <ListItem>
            <ListItemAvatar><StoreIcon /></ListItemAvatar>
            <ListItemText>
              Retirar na loja {pickupStore.name}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              { pickupStore.address.street }, { pickupStore.address.number } { pickupStore.address.complement || "" } | { pickupStore.address.city }-{ pickupStore.address.state }
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Pedido disponível para retirada em até 1 hora após a aprovação do pagamento. Aguarde e-mail de confirmação para retirar o produto na loja
            </ListItemText>
          </ListItem>
        </List> : null
      }
    </PickupStyled>
);
  
export default Pickup;

