import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import { theme } from './theme'
import { Breakpoint } from 'react-socks'

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryDark};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


export const Burger = ({ open, setOpen }, props) => {
    return (
      <div className="burger">
        <Breakpoint small down>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </Breakpoint>
      </div>
    )
  };

  Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };