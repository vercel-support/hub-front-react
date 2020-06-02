import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginActions } from './actions';
import LoginForm from './components/LoginForm/LoginForm';
import './index.css';
import GoToRegister from './components/Register/GoToRegister';
import CheckoutNav from './components/CheckoutNav/CheckoutNav';
import RegisterForm from './components/Register/RegisterForm';
import AddressForm from './components/Address/AddressForm';
import AddressView from './components/Address/AddressView';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    switch (this.props.user.status) {
      case 'ready':
        return (
          <div className="content w-two-thirds-ns pa2">
            <CheckoutNav />
            <div className="flex flex-column flex-row-ns w-100 big-box">
            Exibir Pagamento
            </div>
          </div>
        );
      case 'unknown':
        return (
          <div className="content w-two-thirds-ns pa2">
            <CheckoutNav />
            <div className="flex flex-column flex-row-ns w-100 big-box">
              <LoginForm />
              <div className="divider"></div>
              <GoToRegister />
            </div>
          </div>
        );
      case 'logged':
        return (
          <div className="content w-two-thirds-ns pa2">
            <CheckoutNav />
            <div className="flex flex-column flex-row-ns w-100 big-box">
              <AddressView />
              <AddressForm />
            </div>
          </div>
        );
    }
    return (
      <div className="content w-two-thirds-ns pa2">
        <CheckoutNav />
        <div className="flex flex-column flex-row-ns w-100 big-box">
          <LoginForm />
          <div className="divider"></div>
          <GoToRegister />
          <RegisterForm />
          <AddressView />
          <AddressForm />
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
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
