import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../shared/components/LoginForm/LoginForm';
import GoToRegister from '../../shared/components/Register/GoToRegister';
import CheckoutNav from '../../shared/components/CheckoutNav/CheckoutNav';
import SideBar from '../../shared/components/SideBar/SideBar';
import { loginActions } from '../Login/actions'

class IdentifyLogin extends Component {
  constructor() {
    super();
    this.state = {};
    this.onGoToRegister = this.onGoToRegister.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }
  componentDidMount() {}

  componentDidUpdate() {}

  onGoToRegister() {
    this.props.history.push('/checkout/registrar');
  }
  onLoginSubmit(login){
    this.props.setPassword(login.password);
    if (this.props.user.register.email === '' || this.props.user.register.email == null  )
    {
      this.props.setEmail(login.email);
    }
    this.props.login();
    this.props.history.push('/checkout/endereco');
  }

  render() {
    console.log(this.props)
    return (
      <div className="w-100 flex">
        <div className="content w-two-thirds-ns pa2">
          <CheckoutNav checkout={1} />
          <div className="flex flex-column flex-row-ns w-100 big-box">
            <LoginForm initialEmail={this.props.user.register.email} onSubmit={this.onLoginSubmit} />
            <div className="divider"></div>
            <GoToRegister onSignUpClick={() => this.onGoToRegister()} />
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
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPassword: (password) => dispatch(loginActions.setPassword(password)),
    setEmail: (email) => dispatch(loginActions.setEmail(email)),
    login: () => dispatch(loginActions.login()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IdentifyLogin);
