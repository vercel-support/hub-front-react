import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../assets/img/logo.png';
import tachyons from 'tachyons';
import MiniCart from '../../../pages/Cart/components/MiniCart/MiniCart';
import { generalActions } from '../../../actions';

function HeaderBody(props) {
  return (
    <div className="flex navbar items-center">
      <div className=" di dn-ns white pointer ml2" onClick={() => props.onClickMenu()}>
        {props.showMenu ? <i className="material-icons"  >close</i>
        : <i className="material-icons"  >menu</i>}
      </div>
      <div className="flex justify-between items-center bb b--white-10 w-100">
        <Link className="link flex items-center pa3 w-50 w-25-ns" to="/">
          <img
            src={logo}
            alt="GeraçãoPet - Petland"
            title="GeraçãoPet - Petland"
          />
        </Link>
        <div className="flex-grow pa3 flex justify-around pointer right-0">
          {props.children}
        </div>
      </div>
    </div>
  );
}

class Header extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
    };
    this.onCollMenuClick = this.onCollMenuClick.bind(this);
  }
  onCollMenuClick() {
    console.log('click')
    this.props.toogleCollMenu();
  }

  componentDidMount() {}
  render() {
    const pathname = this.props.location.pathname;
    if (pathname.includes('checkout')) {
      return (
        <HeaderBody onClickMenu={this.onCollMenuClick} showMenu={this.props.window.collMenuShow}>
          <div className="f6 link dib white dim mr3 mr4-ns">
            <i className="material-icons">search</i>
          </div>
        </HeaderBody>
      );
    } else if (pathname.includes('carrinho')) {
      return (
        <HeaderBody onClickMenu={this.onCollMenuClick}>
          <div className="f6 link dib white dim mr3 mr4-ns pa1 flex items-center justify-around dn icon-nav">
            <div className="f6 link dn dib-ns white dim">
              <i className="material-icons pa1">forum</i>
            </div>
            <div className="dn di-ns">{'Atendimento'}</div>
          </div>
          <div
            className="f6 link dib white dim mr3 mr4-ns pa1 flex items-center justify-around dn icon-nav"
            href="#0"
          >
            <div className="f6 link dn dib-ns white dim">
              <i className="material-icons pa1">account_circle</i>
            </div>
            <div className="dn di-ns">{'Entre ou Cadastre-se'}</div>
          </div>
        </HeaderBody>
      );
    } else {
      return (
        <HeaderBody onClickMenu={this.onCollMenuClick}>
          <div className="f6 link dib white dim mr3 mr4-ns pa1 flex items-center justify-center dn icon-nav">
            <div className="f6 link dn dib-ns white dim">
              <i className="material-icons pa1">history</i>
            </div>
            <div className="dn di-ns">{'Meus Pedidos'}</div>
          </div>
          <div
            className="f6 link dib white dim mr3 mr4-ns pa1 flex items-center justify-center dn icon-nav"
            href="#0"
          >
            <div className="f6 link dn dib-ns white dim">
              <i className="material-icons pa1">forum</i>
            </div>
            <div className="dn di-ns">{'Atendimento'}</div>
          </div>
          <div
            className="f6 link dib white dim mr3 mr4-ns pa1 flex items-center justify-center dn icon-nav"
            href="#0"
          >
            <div className="f6 link dn dib-ns white dim">
              <i className="material-icons pa1">account_circle</i>
            </div>
            <div className="dn di-ns">{'Entre ou Cadastre-se'}</div>
          </div>
          <MiniCart />
        </HeaderBody>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    window: state.window,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toogleCollMenu: () => dispatch(generalActions.toogleCollMenu()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
