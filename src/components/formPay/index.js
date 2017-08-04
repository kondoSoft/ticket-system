import React, {Component} from 'react';
import {Div, Row, Input, Button} from './style';

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
    fetch('http://192.168.1.38:1337/payment',{
      method: 'post',
      body: JSON.stringify(test)
    })
    .then((response) => {
      return response.json();
    })
    .then((recurso) => {
      // console.log(recurso);
    })
  }

  onError(err){
    alert(err.data.description)
  }

  render(){
    return (
      <Div>
        <form onSubmit={this.test} id="payment">
          <Row>
            <div>
              <p>Nombre:</p>
              <input style={Input} size="42" type="text" ref="holder_name"/>
            </div>
            <div>
              <p>Apellidos:</p>
              <input style={Input} size="42" type="text" ref="last_name"/>
            </div>
          </Row>
          <Row>
            <div>
              <p>Telefono:</p>
              <input style={Input} size="42" type="text" ref="phone_number"/>
            </div>
            <div>
              <p>Correo:</p>
              <input style={Input} size="42" type="text" ref="email"/>
            </div>
          </Row>
          <Row>
            <div>
              <p>Número de tarjeta:</p>
              <input style={Input} size="25" type="text" ref="card_number"/>
            </div>
            <div>
              <p>Año de vencimiento:</p>
              <input  style={Input} size="15" type="text" ref="expiration_year"/>
            </div>
            <div>
              <p>Mes de expiración:</p>
              <input style={Input} size="15" type="text" ref="expiration_month"/>
            </div>
            <div>
              <p>cvv2:</p>
              <input style={Input} size="15" type="text" ref="cvv2"/>
            </div>
          </Row>
          <Row>
            <div>
              <p>Calle:</p>
              <input style={Input} size="65" type="text" ref="line1"/>
            </div>
            <div>
              <p>Numero:</p>
              <input style={Input} size="20" type="text" ref="line2"/>
            </div>
          </Row>
            <p>Referencias:</p>
            <input style={Input} type="text" ref="line3"/>
          <Row>
            <div>
              <p>Código postal:</p>
              <input style={Input} size="20" type="text" ref="postal_code"/>
            </div>
            <div>
              <p>Ciudad:</p>
              <input style={Input} size="20" type="text" ref="city"/>
            </div>
            <div>
              <p>Estado:</p>
              <input style={Input} size="20" type="text" ref="state"/>
            </div>
            <div>
              <p>Código de país:</p>
              <input style={Input} size="20" type="text" ref="country_code"/>
            </div>
          </Row>
            <input hidden id="deviceIdHiddenFieldName"/><br/>
            <button style={Button} onClick={()=> this.props.setPayment()}>Pagar</button>
        </form>
      </Div>
    )
  }
}

export default FormPay;
