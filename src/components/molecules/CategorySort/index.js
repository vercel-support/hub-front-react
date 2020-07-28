import React, { useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

import CategorySortStyled from "./styles";

const CategorySort = ({ sorters = [], sortedBy = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Hidden mdDown>
        <CategorySortStyled>
          <Paper>
            <MenuList>
              {sorters.map((sort) => (
                <MenuItem key={sort.id}>
                  <Typography variant="inherit">{sort.label}</Typography>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </CategorySortStyled>
      </Hidden>

      <Hidden mdUp>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon htmlColor="white" />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <div style={{ width: "300px" }} role="presentation">
            <List>
              {sorters.map((sort) => (
                <ListItem button key={sort.id}>
                  <ListItemText primary={sort.label} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Hidden>
    </React.Fragment>
  );
};

export default CategorySort;
