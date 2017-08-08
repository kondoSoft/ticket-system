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
    this.state.validation = []
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

  onError(err, request){
    const state = this.state
    let validation = err.data.description.split(",")
    state.validation = validation
    state.request = request
    alert(validation)
    this.setState(state)
    // console.log(validation.indexOf(" holder_name is required"));
    // console.log(validation);
  }

  submit(){
    confirmAlert({
      title: 'El cargo a su tarjeta es de $' + this.props.amount,
      // message: '¿Estás seguro de hacer esto?',
      confirmLabel: 'Aceptar',
      cancelLabel: 'Cancelar',
      onConfirm: ()=> this.props.setPayment(),
      // onCancel: () => alert('Cancel'),
    })
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
              {validation.indexOf(" holder_name is required") > -1 ? <p style={styles.p}>Rellene el campo</p> : ''}
            </div>
            <div>
              <p>Apellidos:</p>
              <input style={styles.input} size="42" type="text" ref="last_name"/>
              {request.last_name == '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
          </Row>
          <Row>
            <div>
              <p>Telefono:</p>
              <input style={styles.input} size="42" type="text" ref="phone_number"/>
              {request.phone_number == '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>Correo:</p>
              <input style={styles.input} size="42" type="text" ref="email"/>
              {request.email == '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
          </Row>
          <Row>
            <div>
              <p>Número de tarjeta:</p>
              <input style={styles.input} size="25" type="text" ref="card_number"/>
              {request.card_number == '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>Año de vencimiento:</p>
              <input  style={styles.input} size="15" type="text" ref="expiration_year"/>
              {request.expiration_year == '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>Mes de expiración:</p>
              <input style={styles.input} size="15" type="text" ref="expiration_month"/>
              {request.expiration_month == '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
            <div>
              <p>cvv2:</p>
              <input style={styles.input} size="15" type="text" ref="cvv2"/>
              {request.cvv2 == '' ? <p style={styles.p}>Campo requerido</p> : ''}
            </div>
          </Row>
          <Row>
            <div>
              <p>Calle:</p>
              <input style={styles.input} size="65" type="text" ref="line1"/>
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
            </div>
            <div>
              <p>Ciudad:</p>
              <input style={styles.input} size="20" type="text" ref="city"/>
            </div>
            <div>
              <p>Estado:</p>
              <input style={styles.input} size="20" type="text" ref="state"/>
            </div>
            <div>
              <p>Código de país:</p>
              <input style={styles.input} size="20" type="text" ref="country_code"/>
            </div>
          </Row>
            <input hidden id="deviceIdHiddenFieldName"/><br/>
            <button style={styles.button} onClick={validation.length === 0 ? '' : this.submit}>Pagar</button>
        </form>
      </Div>
    )
  }
}

export default FormPay;
