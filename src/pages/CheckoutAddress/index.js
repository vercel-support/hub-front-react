import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutNav from '../../shared/components/CheckoutNav/CheckoutNav';
import AddressView from '../../shared/components/Address/AddressView';
import AddressForm from '../../shared/components/Address/AddressForm';
import SideBar from '../../shared/components/SideBar/SideBar';

class CheckoutAddres extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="w-100 flex">
        <div className="content w-two-thirds-ns pa2">
          <CheckoutNav checkout={2} />
          <div className="flex flex-column w-100 big-box">
            <AddressView />
            <AddressForm />
          </div>
        </div>
        <div className="w-third-ns pa2 dn db-ns">
          <SideBar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(loginActions.login()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutAddres);
