// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './responsive-menu.styles';
import { Link } from 'react-router-dom';

export const ResponsiveMenu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <Link to="/services">
        Audio Services
      </Link>
      <Link to="/beats-for-sale">
        Beat Licenses
      </Link>
      <Link to="/about">
        About
      </Link>
      <a href={'https://us7.list-manage.com/contact-form?u=daea54b2881619a66ef815217&form_id=5187f677a6d5390aef0c1e09d8470b9e'}><span role="img" aria-label="contact">&#x1f4e9;</span>Contact</a>
    </StyledMenu>
  );
};

ResponsiveMenu.propTypes = {
  open: bool.isRequired,
}

export default ResponsiveMenu;