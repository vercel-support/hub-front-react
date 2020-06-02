import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutNav from '../../shared/components/CheckoutNav/CheckoutNav';
import RegisterForm from '../../shared/components/Register/RegisterForm';

class IdentifyRegister extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.onGoBackClick = this.onGoBackClick.bind(this);
    this.onRegister = this.onRegister.bind(this)
  }
  componentDidMount() {
  }

  componentDidUpdate() {}

  onGoBackClick(){
    this.props.history.goBack();
  }
  
  onRegister(values){
    console.log(values);
    this.props.history.push('/checkout/endereco')
  }

  render() {
    return (
      <div className="content w-two-thirds-ns pa2">
      <CheckoutNav checkout={1} />
      <div className="flex flex-column flex-row-ns w-100 big-box">
       <RegisterForm onGoBack={this.onGoBackClick} onRegisterSubmit={this.onRegister} />
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
export default connect(mapStateToProps, mapDispatchToProps)(IdentifyRegister);
