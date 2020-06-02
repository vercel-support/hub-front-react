import React, { Component } from 'react';
import NavItem from './NavItem'

class CheckoutNav extends Component {
  render() {
    return (
      <div className="flex pa1 center h2 justify-between fw3 items-center">
        <NavItem type='id' status='done' mobile={true} />
        <div className="w-5 mh1"><i className="material-icons">chevron_right</i></div>
        <NavItem type='add' status='active' mobile={true} />
        <div className="w-5 mh1"><i className="material-icons">chevron_right</i></div>
        <NavItem type='pay' status='incomplete' mobile={true} />
      </div>
    );
  }
}

export default CheckoutNav;
