import React, { Component } from 'react';

class NavItem extends Component {
  constructor() {
    super();
    this.state = {
      label: null,
      icon: null,
      color: null,
    };
  }
  componentDidMount() {
    switch (this.props.type) {
      case 'id': {
        this.setState({
          label: 'IDENTIFICAÇÃO',
          icon: 'account_circle',
        });
        break;
      }
      case 'add': {
        this.setState({
          label: 'ENDEREÇO',
          icon: 'location_on',
        });
        break;
      }
      case 'pay': {
        this.setState({
          label: 'PAGAMENTO',
          icon: 'payment',
        });
        break;
      }
    }
    if (this.props.status < this.props.id) {
      this.setState({
        color: '#8A8A8A',
      });
    } else if (this.props.status == this.props.id) {
      this.setState({
        color: '#2D9CDB',
      });
    } else {
      this.setState({
        color: '#0b3d13',
      });
    }
  }
  render() {
    return (
      <div
        className="flex mh1 center tc items-center"
        style={{ color: this.state.color }}
      >
        <i className="material-icons">{this.state.icon}</i>
        {window.innerWidth >= 480 ? ' ' + this.state.label : ''}
      </div>
    );
  }
}

export default NavItem;
