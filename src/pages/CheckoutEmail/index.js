import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmailForm from '../../shared/components/EmailForm/EmailForm';
import CheckoutNav from '../../shared/components/CheckoutNav/CheckoutNav';
import SideBar from '../../shared/components/SideBar/SideBar';

class CheckoutEmail extends Component {
  constructor() {
    super();
    this.state = {};
    this.onEmailFormSubmit = this.onEmailFormSubmit.bind(this);
  }
  componentDidMount() {}

  componentDidUpdate() {}

  onEmailFormSubmit(email) {
      this.props.history.push('/checkout/login');
    // fetch('localhost:3000/rest/V1/customers/isEmailAvailable', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(email),
    // })
    //   .then((response) => response.json)
    //   .then((response) => {
    //     if (response) {
    //     } else {
    //       this.props.history.pus('/checkout/registrar');
    //     }
    //   });
  }

  render() {
    return (
      <div className="w-100 flex">
        <div className="content w-two-thirds-ns pa2">
          <CheckoutNav checkout={1} />
          <div className="flex flex-column flex-row-ns w-100 big-box">
            <EmailForm onEmailFormSubmit={this.onEmailFormSubmit} />
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutEmail);
