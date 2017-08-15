import React, {Component} from 'react';
import {Div, Row, styles} from './style';

class FormPay extends Component{
  constructor(){
    super();
    this.state = {deviceSessionId: '', validation: [], request: {}}
    this.test=this.test.bind(this)
    this.validateCard=this.validateCard.bind(this)
    this.validateExpiry=this.validateExpiry.bind(this)
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

    if (cardNumber === '') {
      document.getElementById("cardNumber").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("cardNumber").innerHTML = '';
    }
    if (holderName === '') {
      document.getElementById("holderName").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("holderName").innerHTML = '';
    }
    if (lastName === '') {
      document.getElementById("lastName").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("lastName").innerHTML = '';
    }
    if (expirationYear === '') {
      document.getElementById("expirationYear").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("expirationYear").innerHTML = '';
    }
    if (expirationMonth === '') {
      document.getElementById("expirationMonth").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("expirationMonth").innerHTML = '';
    }
    if (cvv2 === '') {
      document.getElementById("cvv2").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("cvv2").innerHTML = '';
    }
    if (city === '') {
      document.getElementById("city").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("city").innerHTML = '';
    }
    if (postalCode === '') {
      document.getElementById("postalCode").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("postalCode").innerHTML = '';
    }
    if (line1 === '') {
      document.getElementById("line1").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("line1").innerHTML = '';
    }
    if (state === '') {
      document.getElementById("state").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("state").innerHTML = '';
    }
    if (countryCode === '') {
      document.getElementById("countryCode").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("countryCode").innerHTML = '';
    }
    if (phoneNumber === '') {
      document.getElementById("phoneNumber").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("phoneNumber").innerHTML = '';
    }
    if (email === '') {
      document.getElementById("email").innerHTML = 'Campo requerido';
    }else {
      document.getElementById("email").innerHTML = '';
    }

    let validateCard = this.validateCard(cvv2, cardNumber)
    let validateExpiry = this.validateExpiry(expirationMonth, expirationYear)

    if (validateCard === true && validateExpiry === true) {
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

      openpay.token.create(request, (e)=>this.onSuccess(e, request),(err)=>this.onError(err, request));
    }else {
      alert('Tarjeta no valida (Verifique los datos ingresado de la tarjeta)');
    }
  }

  onSuccess(res, request){
    const state = this.state
    // let validation = []
    // state.validation = validation
    // state.request = request
    // this.setState(this.state)

    let test = {
      'source_id': res.data.id,
      'method': 'card',
      'amount': this.props.amount,
      'currency': 'MXN',
      'description': 'Cargo inicial a mi cuenta',
      'order_id': 'CMV-'+this.props.orderId,
      'device_session_id' : state.deviceSessionId,
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
      console.log(recurso);
    })
  }

  onError(err, request){
    // const state = this.state
    let validation = err.data.description.split(",")
    // state.validation = validation
    // state.request = request
    // this.setState(state)
    alert(validation)
  }

  validateCard(cvv2, cardNumber){
    const openpay = window.OpenPay
    let card = openpay.card.validateCVC(cvv2, cardNumber);
    // console.log('Validacion de tarjeta', card);
    return card
  }

  validateExpiry(expirationMonth, expirationYear){
    const openpay = window.OpenPay
    let expiry = openpay.card.validateExpiry(expirationMonth, '20'+expirationYear);
    // console.log('Expiracion de tarjeta', expiry);
    return expiry
  }

  render(){
    return (
      <Div>
        <form onSubmit={this.test} id="payment">
          <Row>
            <div>
              <p>Nombre:</p>
              <input style={styles.input} size="42" type="text" ref="holder_name"/>
              <p style={styles.p} id="holderName"></p>
            </div>
            <div>
              <p>Apellidos:</p>
              <input style={styles.input} size="42" type="text" ref="last_name"/>
              <p style={styles.p} id="lastName"></p>
            </div>
          </Row>
          <Row>
            <div>
              <p>Telefono:</p>
              <input style={styles.input} size="42" type="text" ref="phone_number"/>
              <p style={styles.p} id="phoneNumber"></p>
            </div>
            <div>
              <p>Correo:</p>
              <input style={styles.input} size="42" type="text" ref="email"/>
              <p style={styles.p} id="email"></p>
            </div>
          </Row>
          <Row>
            <div>
              <p>Número de tarjeta:</p>
              <input style={styles.input} size="25" type="text" ref="card_number"/>
              <p style={styles.p} id="cardNumber"></p>
            </div>
            <div>
              <p>Año de vencimiento:</p>
              <input  style={styles.input} size="15" type="text" ref="expiration_year"/>
              <p style={styles.p} id="expirationYear"></p>
            </div>
            <div>
              <p>Mes de expiración:</p>
              <input style={styles.input} size="15" type="text" ref="expiration_month"/>
              <p style={styles.p} id="expirationMonth"></p>
            </div>
            <div>
              <p>cvv2:</p>
              <input style={styles.input} size="15" type="text" ref="cvv2"/>
              <p style={styles.p} id="cvv2"></p>
            </div>
          </Row>
          <Row>
            <div>
              <p>Calle:</p>
              <input style={styles.input} size="65" type="text" ref="line1"/>
              <p style={styles.p} id="line1"></p>
            </div>
            <div>
              <p>Numero:</p>
              <input style={styles.input} size="20" type="text" ref="line2"/>
            </div>
          </Row>
            <p>Referencias:</p>
            <input style={styles.input} type="text" ref="line3"/>
          <Row>
            <div>
              <p>Código postal:</p>
              <input style={styles.input} size="20" type="text" ref="postal_code"/>
              <p style={styles.p} id="postalCode"></p>
            </div>
            <div>
              <p>Ciudad:</p>
              <input style={styles.input} size="20" type="text" ref="city"/>
              <p style={styles.p} id="city"></p>
            </div>
            <div>
              <p>Estado:</p>
              <input style={styles.input} size="20" type="text" ref="state"/>
              <p style={styles.p} id="state"></p>
            </div>
            <div>
              <p>Código de país:</p>
              <input style={styles.input} size="20" type="text" ref="country_code"/>
              <p style={styles.p} id="countryCode"></p>
            </div>
          </Row>
            <input hidden id="deviceIdHiddenFieldName"/><br/>
            <button style={styles.button} onClick={()=> this.props.setPayment()}>Pagar</button>
        </form>
      </Div>
    )
  }
}

export default FormPay;
