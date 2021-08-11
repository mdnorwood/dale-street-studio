import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { SignOutAndInLink } from './header.styles';

const HeaderSignInCart = ({ currentUser, hidden, signOutStart }) => {

    return (

        <div>
        {currentUser ? (
            <SignOutAndInLink as='div' className='option' onClick={signOutStart}>
              SIGN OUT
            </SignOutAndInLink>
          ) : (
            <SignOutAndInLink
              exact
              to='/sign-in'
              activeStyle={{
                fontWeight: "bold",
                color: "#faae2b"
              }}
            >
              SIGN IN
            </SignOutAndInLink>
          )}
  
          <CartIcon className='option' />
          {hidden ? null : <CartDropdown />}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderSignInCart);


