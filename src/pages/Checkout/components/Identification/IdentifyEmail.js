import React, { Component } from 'react';
import { connect } from 'react-redux';
import cartActions from '../../../Cart/actions';
import tachyons from 'tachyons';
import './IdentifyEmail.css';

class IdentifyEmail extends Component {
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
        <div className="wrapper flex flex-column ph4 w-80-ns center top--2-ns relative">
          <div className="f3 f2-m lh-copy fw8 ">Identificação</div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch(cartActions.startLoading()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IdentifyEmail);
