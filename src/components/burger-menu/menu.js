import React from 'react';
import { Link } from 'react-router-dom'
import { bool } from 'prop-types';
import styled from 'styled-components';
import { theme } from './theme';
import { Breakpoint } from 'react-socks';

const StyledMenu = styled.nav`
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
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
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
`;


export const Menu = ({ open }) => {
    return (
      <div className='menu'>
        <Breakpoint small down>
          <StyledMenu open={open}>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </StyledMenu>
      </Breakpoint>
    </div>
    )
  };

  Menu.propTypes = {
    open: bool.isRequired,
  };