import React, {Component} from 'react';
import {Div} from './style';

class FormPay extends Component{
  constructor(){
    super();
    this.state = {test: []}
    this.test=this.test.bind(this)
  }

  test(event){
    event.preventDefault()

    let cardNumber = this.refs.card_number.value
    let holderName = this.refs.holder_name.value
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
    console.log();
    openpay.token.create({
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
    }, (e)=>this.onSuccess(e),(err)=>this.onError(err));
  }

  onSuccess(res){
    console.log(res);
    // let test = {"message":"hola"}
    // fetch('http://192.168.1.38:1337/prueba',{
    //   method: 'post',
    //   body: JSON.stringify(test)
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((recurso) => {
    //   this.setState({test:recurso})
    // })
  }

  onError(err){
    alert(err.data.description)
  }

  render(){
    return (
      <Div>
        <form onSubmit={this.test}>
            <p>Holder Name:</p>
            <input size="50" type="text" ref="holder_name"/>

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
            <button>make card</button>
        </form>
      </Div>
    )
  }
}

export default FormPay;
