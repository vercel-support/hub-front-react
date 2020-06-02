import React, { Component } from 'react';
import NavItem from './NavItem'

class CheckoutNav extends Component {
  render() {
    return (
      <div className="flex pa1 center h2 justify-between fw3 items-center">
        <NavItem type='id' status={this.props.checkout} id={1} mobile={true} />
        <div className="w-5 mh1"><i className="material-icons">chevron_right</i></div>
        <NavItem type='add' status={this.props.checkout} id={2} mobile={true} />
        <div className="w-5 mh1"><i className="material-icons">chevron_right</i></div>
        <NavItem type='pay' status={this.props.checkout} id={3} mobile={true} />
      </div>
    );
  }
}

export default CheckoutNav;
