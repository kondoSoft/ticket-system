import React, {Component} from 'react';
import {Div, Row, styles} from './style';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

class FormPay extends Component{
  constructor(){
    super();
    this.state = {deviceSessionId: '', validation: [], request: {}}
    this.test=this.test.bind(this)
    this.submit=this.submit.bind(this)
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
    // if (holderName ==='') {
    //   let last =document.getElementById('validation')
    //   last.addClass()
    // }

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

    this.validateCard(cvv2, cardNumber)
    this.validateExpiry(expirationMonth, expirationYear)


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
  }

  onSuccess(res, request){
    const state = this.state
    let validation = []
    state.validation = validation
    state.request = request
    this.setState(this.state)

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
    const state = this.state
    let validation = err.data.description.split(",")
    state.validation = validation
    state.request = request
    this.setState(state)
    // alert(validation)
    console.log(request.address.city);
  }

  submit(){
    confirmAlert({
      title: 'El cargo a su tarjeta es de $' + this.props.amount,
      confirmLabel: 'Aceptar',
      cancelLabel: 'Cancelar',
      onConfirm: ()=> this.props.setPayment(),
    })
  }

  validateCard(cvv2, cardNumber){
    const openpay = window.OpenPay
    let card = openpay.card.validateCVC(cvv2, cardNumber);
    console.log('Validacion de tarjeta', card);
  }

  validateExpiry(expirationMonth, expirationYear){
    const openpay = window.OpenPay
    let expiry = openpay.card.validateExpiry(expirationMonth, '20'+expirationYear);
    console.log('Expiracion de tarjeta', expiry);
  }

  render(){
    const {validation, request} = this.state
    return (
      <Div>
        <form onSubmit={this.test} id="payment">
          <Row>
            <div>
              <p>Nombre:</p>
              <input style={styles.input} size="42" type="text" ref="holder_name"/>
              {request.holder_name === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>Apellidos:</p>
              <input style={styles.input} size="42" type="text" ref="last_name"/>
              {request.last_name === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
          </Row>
          <Row>
            <div>
              <p>Telefono:</p>
              <input style={styles.input} size="42" type="text" ref="phone_number"/>
              {request.phone_number === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>Correo:</p>
              <input style={styles.input} size="42" type="text" ref="email"/>
              {request.email === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
          </Row>
          <Row>
            <div>
              <p>Número de tarjeta:</p>
              <input style={styles.input} size="25" type="text" ref="card_number"/>
              {request.card_number === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>Año de vencimiento:</p>
              <input  style={styles.input} size="15" type="text" ref="expiration_year"/>
              {request.expiration_year === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>Mes de expiración:</p>
              <input style={styles.input} size="15" type="text" ref="expiration_month"/>
              {request.expiration_month === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>cvv2:</p>
              <input style={styles.input} size="15" type="text" ref="cvv2"/>
              {request.cvv2 === '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
          </Row>
          <Row>
            <div>
              <p>Calle:</p>
              <input style={styles.input} size="65" type="text" ref="line1"/>
              {validation.indexOf(" address.line1 is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> :
                validation.indexOf("address.line1 is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> : ''
              }
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
              {validation.indexOf(" address.postal_code is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> :
                validation.indexOf("address.postal_code is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> :
                validation.indexOf(" address.postal_code la longitud tiene que estar entre 1 y 12") > -1 ?
                <p style={styles.p}>La longitud tiene que estar entre 1 y 12</p> : ''
              }
            </div>
            <div>
              <p>Ciudad:</p>
              <input style={styles.input} size="20" type="text" ref="city"/>
              {validation.indexOf(" address.city is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> :
                validation.indexOf("address.city is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> : ''
              }
            </div>
            <div>
              <p>Estado:</p>
              <input style={styles.input} size="20" type="text" ref="state"/>
              {validation.indexOf(" address.state is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> :
                validation.indexOf("address.state is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> : ''
              }
            </div>
            <div>
              <p>Código de país:</p>
              <input style={styles.input} size="20" type="text" ref="country_code"/>
              {validation.indexOf(" address.country_code is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> :
                validation.indexOf("address.country_code is required") > -1 ?
                <p style={styles.p}>Campo requerido</p> :
                validation.indexOf("address.country_code is invalid") > -1 ?
                <p style={styles.p}>El código del país no es válido</p> : ''
              }
            </div>
          </Row>
            <input hidden id="deviceIdHiddenFieldName"/><br/>
            <button style={styles.button} onClick={validation.length === 0 ? this.submit : ''}>Pagar</button>
        </form>
      </Div>
    )
  }
}

export default FormPay;
