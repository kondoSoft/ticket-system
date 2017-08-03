import React, {Component} from 'react';
import {Div} from './style'

class FormPay extends Component{
  constructor(){
    super();
    this.state = {test: []}
    this.test=this.test.bind(this)
  }

  test(event){
    let test = {"message":"hola"}
    event.preventDefault()
    fetch('http://192.168.1.38:1337/prueba',{
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

  render(){
    return (
      <Div>
        <form onSubmit={this.test}>
            <p>Holder Name:</p>
            <input data-openpay-card="holder_name" size="50" type="text" ref=""/>

            <p>Card number:</p>
            <input data-openpay-card="card_number" size="50" type="text" ref=""/>

            <p>Expiration year:</p>
            <input data-openpay-card="expiration_year" size="4" type="text" ref=""/>

            <p>Expiration month:</p>
            <input data-openpay-card="expiration_month" size="4" type="text" ref=""/>

            <p>cvv2:</p>
            <input data-openpay-card="cvv2" size="5" type="text" ref=""/>

            <p>Street:</p>
            <input data-openpay-card-address="line1" size="20" type="text" ref=""/>

            <p>Number:</p>
            <input data-openpay-card-address="line2" size="20" type="text" ref=""/>

            <p>References:</p>
            <input data-openpay-card-address="line3" size="20" type="text" ref=""/>

            <p>Postal code:</p>
            <input data-openpay-card-address="postal_code" size="6" type="text" ref=""/>

            <p>City:</p>
            <input data-openpay-card-address="city" size="20" type="text" ref=""/>

            <p>State:</p>
            <input data-openpay-card-address="state" size="20" type="text" ref=""/>

            <p>Country code:</p>
            <input data-openpay-card-address="country_code" size="3" type="text" ref=""/>
            <button>make card</button>
        </form>
      </Div>
    )
  }
}

export default FormPay;
