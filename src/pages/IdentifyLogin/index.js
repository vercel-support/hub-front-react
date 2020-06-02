import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from '../../shared/components/LoginForm/LoginForm'
import GoToRegister from '../../shared/components/Register/GoToRegister';
import CheckoutNav from '../../shared/components/CheckoutNav/CheckoutNav';

class IdentifyLogin extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.onGoToRegister = this.onGoToRegister.bind(this);
  }
  componentDidMount() {
  }

  componentDidUpdate() {}

  onGoToRegister(){
    this.props.history.push('/checkout/registrar')
  }

  render() {
    return (
      <div className="content w-two-thirds-ns pa2">
      <CheckoutNav checkout={1} />
      <div className="flex flex-column flex-row-ns w-100 big-box">
        <LoginForm />
        <div className="divider"></div>
        <GoToRegister onSignUpClick={() => this.onGoToRegister()} />
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
export default connect(mapStateToProps, mapDispatchToProps)(IdentifyLogin);
