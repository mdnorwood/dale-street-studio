import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import HeaderSignInCart from './header-signin-cart.component';
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
          <LogoText></LogoText>
        </LogoContainer>
        <OptionsContainer>
        <a href={'http://eepurl.com/hyqpfb'}><SpecialText isActive={true}>Booking</SpecialText></a>
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
            Audio Services
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
            About
          </OptionLink>
                <OptionLink
            exact
            to='/beats-for-sale'
            activeStyle={{
              fontWeight: "bold",
              color: "#faae2b",
              fontSize: "25px"
            }}
          >
            Beat Licenses
          </OptionLink> 
          <a style={{ color: 'white', padding: '15px' }} href={'https://us7.list-manage.com/contact-form?u=daea54b2881619a66ef815217&form_id=5187f677a6d5390aef0c1e09d8470b9e'}>Contact</a>
        </OptionsContainer>        
        
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