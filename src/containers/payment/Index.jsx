import React, { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import AppContext from '../../context/AppContext';

const Payment = () => {
  const { state } = useContext(AppContext);
  const {buyer} = state;
  return (
    <div className='flex'>
      <div className="w-screen flex flex-col lg:flex-row bg-gray-200 p-10 lg:p-20">
        <section className="Payment-content">
          <h3>Resument del pedido:</h3>
          <div className="Payment-button">
            Boton de pago con Paypal
          </div>
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
              style={{ layout: "horizontal" }}
              // onApprove={(data, actions) => {
              //   return actions.order.capture().then((details) => {
              //     const name = details.payer.name.given_name;
              //     alert(`Transaction completed by ${name}`);
              //   });
              // }}
            />
          </PayPalScriptProvider>
        </section>
        <div />
      </div>
    </div>
  );
}

export default Payment;