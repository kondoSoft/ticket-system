import React, {Component} from 'react';
import {Div} from './style';
import Button from '../Button';

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

    let cardNumber = this.refs.card_number.value
    let holderName = this.refs.holder_name.value
    let lastName = this.refs.last_name.value
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
    let phoneNumber = this.refs.phone_number.value
    let email = this.refs.email.value

    const openpay = window.OpenPay
    openpay.setId('mxvvjiqmnh5lhpdhogvo');
    openpay.setApiKey('pk_c8b8d91ff30d4bf18ab84a39a063549a');
    openpay.setSandboxMode(true);

    let request = {
      "card_number":cardNumber,
      "holder_name":holderName,
      "last_name":lastName,
      "phone_number":phoneNumber,
      "email":email,
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

    openpay.token.create(request, (e)=>this.onSuccess(e, request),(err)=>this.onError(err));
  }

  onSuccess(res, request){
    const deviceSessionId = this.state.deviceSessionId
    let test = {
      'source_id': res.data.id,
      'method': 'card',
      'amount': this.props.amount,
      'currency': 'MXN',
      'description': 'Cargo inicial a mi cuenta',
      'order_id': 'CMV-'+this.props.orderId,
      'device_session_id' : deviceSessionId,
      'customer': {
        'name': request.holder_name,
        'last_name': request.last_name,
        'phone_number': request.phone_number,
        'email': request.email
      }
    }
    console.log('cliente ', test);
    fetch('http://192.168.1.38:1337/payment',{
      method: 'post',
      body: JSON.stringify(test)
    })
    .then((response) => {
      return response.json();
    })
    // .then((recurso) => {
    //   this.setState({test:recurso})
    // })
  }

  onError(err){
    alert(err.data.description)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.test} id="payment">
            <p>Nombre:</p>
            <input size="50" type="text" ref="holder_name"/>

            <p>Apellidos:</p>
            <input size="50" type="text" ref="last_name"/>

            <p>Telefono:</p>
            <input size="50" type="text" ref="phone_number"/>

            <p>Correo:</p>
            <input size="50" type="text" ref="email"/>

            <p>Número de tarjeta:</p>
            <input size="50" type="text" ref="card_number"/>

            <p>Año de vencimiento:</p>
            <input  size="4" type="text" ref="expiration_year"/>

            <p>Mes de expiración:</p>
            <input size="4" type="text" ref="expiration_month"/>

            <p>cvv2:</p>
            <input size="5" type="text" ref="cvv2"/>

            <p>Calle:</p>
            <input size="20" type="text" ref="line1"/>

            <p>Numero:</p>
            <input size="20" type="text" ref="line2"/>

            <p>Referencias:</p>
            <input size="20" type="text" ref="line3"/>

            <p>Código postal:</p>
            <input size="6" type="text" ref="postal_code"/>

            <p>Ciudad:</p>
            <input size="20" type="text" ref="city"/>

            <p>Estado:</p>
            <input size="20" type="text" ref="state"/>

            <p>Código de país:</p>
            <input size="3" type="text" ref="country_code"/>

            <input hidden id="deviceIdHiddenFieldName"/><br/>
            <button onClick={()=> this.props.setPayment()}>Pagar</button>
        </form>
      </div>
    )
  }
}

export default FormPay;
