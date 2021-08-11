
// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    // Menu.styled.js
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 80%;
    }

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 1rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
  }
`;