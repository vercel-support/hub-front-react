import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loginActions } from './actions';
import LoginForm from '../../shared/components/LoginForm/LoginForm'
import './index.css';
import GoToRegister from '../../shared/components/Register/GoToRegister';
import CheckoutNav from '../../shared/components/CheckoutNav/CheckoutNav';
import RegisterForm from '../../shared/components/Register/RegisterForm';
import AddressForm from '../../shared/components/Address/AddressForm';
import AddressView from '../../shared/components/Address/AddressView';

class Login extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  componentDidMount() {
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="content w-two-thirds-ns pa2">
      <CheckoutNav />
      <div className="flex flex-column flex-row-ns w-100 big-box">
        <LoginForm />
        <div className="divider"></div>
        <GoToRegister />
       {/* <RegisterForm />
        <AddressView />
        <AddressForm /> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
