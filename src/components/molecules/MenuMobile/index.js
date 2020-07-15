import React, { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import Wrapper from "./styles";

const Item = ({ item }) => (
  <ListItem button>
    <ListItemText primary={item.name} />
  </ListItem>
);

const ItemCollapse = ({ listItem }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary={listItem.name} />
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listItem.children.map((item, i) =>
            item?.children?.length ? (
              <ItemCollapse listItem={item} key={i} />
            ) : (
              <Item item={item} key={i} />
            )
          )}
        </List>
      </Collapse>
      <Divider />
    </React.Fragment>
  );
};

const MenuMobile = ({ categories = [] }) => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Wrapper>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon htmlColor="white" />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div style={{ width: "300px" }} role="presentation">
          <List>
            <ListItem button onClick={() => setOpenMenu(!openMenu)}>
              <ListItemText primary="Entre ou Cadastre-se" />
              <ListItemIcon>
                {openMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            </ListItem>
            <Collapse in={openMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="Minha Conta" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Meus Pedidos" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Atendimento" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Sair" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
          </List>

          <List>
            {categories.map((item, i) =>
              item?.children?.length ? (
                <ItemCollapse listItem={item} key={i} />
              ) : (
                <Item item={item} key={i} />
              )
            )}
          </List>
        </div>
      </Drawer>
    </Wrapper>
  );
};

export default MenuMobile;
