import React from 'react';

import { CartItemContainer, ItemDetailsContainer, NameContainer } from './cart-item.styles';

const CartItem = ({item: {imageUrl, price, name, quantity} }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <div className='price'>
       {quantity} x ${price}
      </div>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);