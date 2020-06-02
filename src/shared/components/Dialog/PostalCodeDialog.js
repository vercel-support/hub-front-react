import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';

class PostalCodeForm extends Component {
    constructor(){
        super();
        this.state={
            inputCEP: '',
        }
    }
    onChangeInput(e){
        this.setState({inputCEP: e.target.value})
    }
  render() {
    let { show } = this.props;
    return (
      <div
        className="ba br2 bg-near-white w-90 w-25-l w-50-m pa2 ma2 center absolute self-center"
        style={show ? { display: 'block' } : { display: 'none' }}
      >
        <div className="flex justify-around">
          <div className="db fw6 lh-copy f6"> CEP </div>
          <MaskedInput
            className="pa2 input-reset ba bg-white w-50"
            name="cep"
            id="cep"
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            placeholder="Insira o CEP desejado"
            showMask={true}
            guide={true}
            value={this.state.inputCEP}
            onChange={this.onChangeInput.bind(this)}
          />
        </div>
        <div className="flex justify-around">
          <div
            className="dialogFooter pointer tc button mv1 lh-title w-25"
            onClick={() => this.props.onSave(this.state.inputCEP)}
          >
            Salvar
          </div>
          <div
            className="dialogFooter pointer tc button mv1 lh-title w-25"
            onClick={() => this.props.onClose()}
          >
            Fechar
          </div>
        </div>
      </div>
    );
  }
}

export default PostalCodeForm;
