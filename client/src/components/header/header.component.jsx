import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { Burger } from '../burger/burger.component';
import { ResponsiveMenu } from '../responsive-menu/responsive-menu.component';
import { useOnClickOutside } from '../../hooks';



import {
  MainHeaderContainer,
  HeaderContainer,
  LogoContainer,
  LogoMain,
  OptionsContainer,
  OptionLink,
  SpecialText,
  LogoText,
  LogoSubText,
  SignOutAndInLink
  } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
  <MainHeaderContainer>
      <HeaderContainer>
        <LogoContainer to='/'>
          <LogoMain />
        </LogoContainer>
        <LogoText>
          Dale Street Studio<br />
          <LogoSubText>
            beats. mixing. music.
          </LogoSubText>
        </LogoText>
        <OptionsContainer>
          <SpecialText isActive={false}>Now Booking Clients</SpecialText>
          <OptionLink
            className='material-icons'
            exact
            to='/'
            activeStyle={{
              fontWeight: "bold",
              color: `"#faae2b"`,
              fontSize: "35px"
            }}
          >
            home
          </OptionLink>
          <OptionLink
            exact
            to='/services'
            activeStyle={{
              fontWeight: "bold",
              color: "#faae2b",
              fontSize: "25px"
            }}
          >
            SERVICES
          </OptionLink>
          <OptionLink
            exact
            to='/about'
            activeStyle={{
              fontWeight: "bold",
              color: "#faae2b",
              fontSize: "25px"
            }}
          >
            ABOUT
          </OptionLink>
          <OptionLink to={{ pathname: "http://localhost:8000/" }} target="_blank">
            BLOG
          </OptionLink>
          <OptionLink
            exact
            to='/contact'
            activeStyle={{
              fontWeight: "bold",
              color: "#faae2b",
              fontSize: "25px"
            }}
          >
            CONTACT
          </OptionLink>
          <OptionLink
            exact
            to='/shop'
            activeStyle={{
              fontWeight: "bold",
              color: "#faae2b",
              fontSize: "25px"
            }}
          >
            SHOP
          </OptionLink>
        </OptionsContainer>

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
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <ResponsiveMenu open={open} setOpen={setOpen}></ResponsiveMenu>
        </div>

    </HeaderContainer>
  </MainHeaderContainer>
  );
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
)(Header);