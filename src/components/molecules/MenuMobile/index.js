import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles({
  list: {
    width: 300,
  },
});

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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className={classes.list} role="presentation">
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
    </React.Fragment>
  );
};

export default MenuMobile;
