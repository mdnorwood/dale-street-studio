import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_PXFhSvADZpd2WKpqWHAZMzTN';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
        alert('Payment successful')
      }).catch(error => {
          console.log('Payment error: ', JSON.parse(error));
          alert(
            'There was an issue with your payment. Please make sure you use the provided credit card'
          );
      });
    };


  return (
    <StripeCheckout
      label='Pay Now'
      name='Definition Music & Mastering'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/sVsfxRc/Definition-Icon.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;