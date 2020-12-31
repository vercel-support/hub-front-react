import React, { useState } from "react";
import Link from "next/link";
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
import { ItemText } from "./styles";
import { makeStyles } from '@material-ui/core/styles';
import { AccountResume } from "../../atoms";

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: 0
  },
  accountItem: {
    backgroundColor: "#2983B9",
    height: "5rem",
    '&:hover': {
      backgroundColor: "#2D7AA9"
    }
  },
  listItem: {
    borderStyle: 'none',
  },
}));


const Item = ({ item }) => {
  const classes = useStyles();
  return (
    <ListItem divider="false" button>
    <ItemText>{item.name}</ItemText>
    </ListItem>
  );
}; 

const ItemCollapse = ({ listItem }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ListItem divider="false" className={classes.listItem} button onClick={() => setOpen(!open)}>
        <ListItemText><ItemText>{listItem.name}</ItemText></ListItemText>
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {listItem.children.map((item, i) =>
            item?.children?.length ? (
              <ItemCollapse listItem={item} key={i} />
            ) : (
              <Link href={`/${item.url}`}>
                <a>
                  <Item className={classes.listItem} item={item} key={i} />
                </a>
              </Link>
            )
          )}
        </List>
      </Collapse>
{/*       <Divider /> */}
    </React.Fragment>
  );
};

const MenuMobile = ({ categories = [] }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Wrapper>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon htmlColor="white" />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} disableScrollLock={true}>
        <div style={{ width: "300px" }} role="presentation">
          <List className={classes.list}>
              <Link href={`/minha-conta`}>
                <ListItem divider="false" className={classes.accountItem} button>
                  <a>
                    <AccountResume desktop={false}/>
                  </a>
                </ListItem>
              </Link>
{/*             <Divider /> */}
          </List>
          <List>
            {categories.map((item, i) =>
              item?.children?.length ? (
                <ItemCollapse listItem={item} key={i} />
              ) : (
                <Link href={`/${item.url}`}>
                  <a>
                    <Item item={item} key={i} />
                  </a>
                </Link>
              )
            )}
          </List>
        </div>
      </Drawer>
    </Wrapper>
  );
};

export default MenuMobile;