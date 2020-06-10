import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tachyons from 'tachyons';
import './CollapsibleMenu.css';

const MenuItem = (item) => {
  if (item.children.length > 0) {
    return (
      <Dropdown
        title={item.name}
        id="collapsible-nav-dropdown"
        className="menu-dropdown"
        as={ButtonGroup}
        bsPrefix="menu-dropdown"
        key={item.id}
        href={'/' + item.url}
      >
        <div className="flex flex-row items-center">
          <Button
            as={Link}
            to={'/' + item.url}
            id={item.id + 'l'}
            className="menu-dropdown"
          >
            {item.name}
          </Button>
          <Dropdown.Toggle
            as="i"
            split
            variant="success"
            id={'dropdown-custom-' + item.level}
            className="material-icons pointer"
            data-toogle="dropdown"
          >
            expand_more
          </Dropdown.Toggle>
        </div>
        <div className="dropdown">
          <Dropdown.Menu
            className={'' + item.name.concat(item.level).replace(/\s/g, '')}
            id={'dropdown-menu-' + item.level}
            key={item.id + 'm'}
            collapseonselect="true"
          >
            {item.children.map((child) => {
              if (child.children) {
                return MenuItem(child);
              } else {
                return (
                  <Dropdown.Item
                    as={Link}
                    to={'/' + child.url}
                    eventKey={child.id}
                    className="menu-item flex underline"
                    data-toogle="dropdown"
                  >
                   <i className="material-icons"  >keyboard_arrow_right</i> {child.name}
                  </Dropdown.Item>
                );
              }
            })}
          </Dropdown.Menu>
        </div>
      </Dropdown>
    );
  } else {
    return (
      <Nav.Link
        as={Link}
        to={'/' + item.url}
        key={item.id}
        className="menu-item flex mt2-ns"
        id={item.id}
        data-toogle="dropdown"
      >
        <i className="material-icons"  >keyboard_arrow_right</i>{item.name}
      </Nav.Link>
    );
  }
};

class CollapsibleMenu extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      menu: [],
    };
    this.fetchMenu = this.fetchMenu.bind(this);
  }
  componentDidMount() {
    this.fetchMenu();
  }
  async fetchMenu(){
    await fetch('http://18.229.234.11:3000/api/V2/catalogs/categories', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          let menu = [];
          response.data.map((menuItem) => {
            menuItem.level == 1 ? menu.push(menuItem) : null;
          });
          this.setState({ menu: menu });
        });
  }

  componentDidUpdate() {}

  render() {
    const classes = this.props.showMenu ? 'db' : 'dn';
    return (
      <Navbar
        className={'menu fixed-top absolute relative-ns di-ns ' + classes}
        collapseonselect="true"
      >
        <Nav className="coll-menu mr-auto flex-collumn flex-ns justify-around w-100">
          {this.state.menu.map((item) => MenuItem(item))}
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.window.collMenuShow,
  };
};

export default connect(mapStateToProps)(CollapsibleMenu);
