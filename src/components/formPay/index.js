import React, {Component} from 'react';
import {Div} from './style';

class FormPay extends Component{
  constructor(){
    super();
    this.state = {deviceSessionId: ''}
    this.test=this.test.bind(this)
  }

  componentDidMount(){
    const openpay = window.OpenPay
    const deviceSessionId = openpay.deviceData.setup('payment', 'deviceIdHiddenFieldName')
    this.setState({
      deviceSessionId:deviceSessionId
    })
  }

  test(event){
    event.preventDefault()

    let deviceSessionId = this.state.deviceSessionId
    let cardNumber = this.refs.card_number.value
    let holderName = this.refs.holder_name.value + this.refs.last_name.value
    let expirationYear = this.refs.expiration_year.value
    let expirationMonth = this.refs.expiration_month.value
    let cvv2 = this.refs.cvv2.value
    let city = this.refs.city.value
    let line3 = this.refs.line3.value
    let postalCode = this.refs.postal_code.value
    let line1 = this.refs.line1.value
    let line2 = this.refs.line2.value
    let state = this.refs.state.value
    let countryCode = this.refs.country_code.value

    const openpay = window.OpenPay
    openpay.setId('mxvvjiqmnh5lhpdhogvo');
    openpay.setApiKey('pk_c8b8d91ff30d4bf18ab84a39a063549a');
    openpay.setSandboxMode(true);

    let request = {
      "card_number":cardNumber,
      "holder_name":holderName,
      "expiration_year":expirationYear,
      "expiration_month":expirationMonth,
      "cvv2":cvv2,
      "address":{
         "city":city,
         "line3":line3,
         "postal_code":postalCode,
         "line1":line1,
         "line2":line2,
         "state":state,
         "country_code":countryCode
      }
    }
    openpay.token.create( request, (e)=>this.onSuccess(e, request),(err)=>this.onError(err));
  }

  onSuccess(res, request){

    let test = {
      'source_id': 'kqgykn96i7bcs1wwhvgw',
      'method': 'card',
      'amount': 10101,
      'currency': 'MXN',
      'description': 'Cargo inicial a mi cuenta',
      'order_id': 'oid-00051',
      'device_session_id' : 'kR1MiQhz2otdIuUlQkbEyitIqVMiI16f',
      'customer': {
        'name': request.holder_name,
        'last_name': 'Vazquez Juarez',
        'phone_number': '4423456723',
        'email': 'juan.vazquez@empresa.com.mx'
      }
    }
    
    fetch('http://192.168.1.38:1337/payment',{
      method: 'post',
      body: JSON.stringify(test)
    })
    .then((response) => {
      return response.json();
    })
    .then((recurso) => {
      this.setState({test:recurso})
    })
  }

  onError(err){
    alert(err.data.description)
  }

  render(){
    return (
      <Div>
        <form onSubmit={this.test} id="payment">
            <p>Nombre:</p>
            <input size="50" type="text" ref="holder_name"/>

            <p>Apellidos:</p>
            <input size="50" type="text" ref="last_name"/>

            <p>Telefono:</p>
            <input size="50" type="text" ref="phone_number"/>

            <p>Correo:</p>
            <input size="50" type="text" ref="email"/>

            <p>Card number:</p>
            <input size="50" type="text" ref="card_number"/>

            <p>Expiration year:</p>
            <input  size="4" type="text" ref="expiration_year"/>

            <p>Expiration month:</p>
            <input size="4" type="text" ref="expiration_month"/>

            <p>cvv2:</p>
            <input size="5" type="text" ref="cvv2"/>

            <p>Street:</p>
            <input size="20" type="text" ref="line1"/>

            <p>Number:</p>
            <input size="20" type="text" ref="line2"/>

            <p>References:</p>
            <input size="20" type="text" ref="line3"/>

            <p>Postal code:</p>
            <input size="6" type="text" ref="postal_code"/>

            <p>City:</p>
            <input size="20" type="text" ref="city"/>

            <p>State:</p>
            <input size="20" type="text" ref="state"/>

            <p>Country code:</p>
            <input size="3" type="text" ref="country_code"/>

            <input hidden id="deviceIdHiddenFieldName"/>
            <button>make card</button>
        </form>
      </Div>
    )
  }
}

export default FormPay;
