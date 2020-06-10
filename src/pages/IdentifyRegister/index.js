import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutNav from '../../shared/components/CheckoutNav/CheckoutNav';
import RegisterForm from '../../shared/components/Register/RegisterForm';
import SideBar from '../../shared/components/SideBar/SideBar';
import {loginActions} from '../Login/actions'

class IdentifyRegister extends Component {
  constructor() {
    super();
    this.state = {};
    this.onGoBackClick = this.onGoBackClick.bind(this);
    this.onSubmitRegister = this.onSubmitRegister.bind(this);
  }
  componentDidMount() {}

  componentDidUpdate() {}

  onGoBackClick() {
    this.props.history.goBack();
  }

  onSubmitRegister(register) {
    this.props.setFirsName(register.fname);
    this.props.setLastName(register.lname);
    this.props.setEmail(register.email);
    this.props.setCPF(register.cpf);
    this.props.setMobileNumber(register.mobile);
    this.props.setPassword(register.password);
    this.props.login();
    this.props.history.push('/checkout/endereco');
  }

  render() {
    return (
      <div className="w-100 flex">
        <div className="content w-two-thirds-ns pa2">
          <CheckoutNav checkout={1} />
          <div className="flex flex-column flex-row-ns w-100 big-box">
            <RegisterForm
              onGoBack={this.onGoBackClick}
              onSubmit={this.onSubmitRegister}
              userEmail={this.props.userEmail}
            />
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
    userEmail: state.user.register.email,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => dispatch(loginActions.setEmail(email)),
    setFirsName: (fname) => dispatch(loginActions.setFirsName(fname)),
    setLastName: (lname) => dispatch(loginActions.setLastName(lname)),
    setCPF: (cpf) => dispatch(loginActions.setCPF(cpf)),
    setMobileNumber: (mobile) => dispatch(loginActions.setMobileNumber(mobile)),
    setPassword: (password) => dispatch(loginActions.setPassword(password)),
    login: () => dispatch(loginActions.login()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IdentifyRegister);
