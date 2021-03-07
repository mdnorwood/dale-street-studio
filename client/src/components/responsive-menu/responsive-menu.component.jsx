// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './responsive-menu.styles';
import { Link } from 'react-router-dom';

export const ResponsiveMenu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <Link to="/services">
        <span role="img" aria-label="services">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        Services
      </Link>
      <Link to="/about">
        <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About
      </Link>
      <Link to="/shop">
        <span role="img" aria-label="shop">&#x1f4b8;</span>
        Shop Merch
        </Link>
      <Link to="/contact">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </Link>
    </StyledMenu>
  );
};

ResponsiveMenu.propTypes = {
  open: bool.isRequired,
}

export default ResponsiveMenu;