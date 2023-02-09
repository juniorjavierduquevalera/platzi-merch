import React from 'react';

const Payment = () => {
  return (
    <div className='flex'>
      <div className="w-screen flex flex-col lg:flex-row bg-gray-200 p-10 lg:p-20">
        <section className="Payment-content">
          <h3>Resument del pedido:</h3>
          <div className="Payment-button">
            Boton de pago con Paypal
          </div>
        </section>
        <div />
      </div>
    </div>
  );
}

export default Payment;