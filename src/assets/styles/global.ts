import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body, input, textarea, select, button {
  font-size: 1rem;
}

body {
  background-color: ${({ theme }) => theme.primary};
}

`

export const Container = styled.section`
  max-width: 380px;
  width: 100%;
  margin: auto;

  background-color: ${({ theme }) => theme.primary};
`

export const Button = styled.button`
  background: #26e11d;
  color: #313131;
  border: 0;
  height: 40px;
  width: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 5px 5px 0px red;
  }
  /* transition: all 2s ease-out;
  
  overflow: hidden;

  &:before {
    transition: all 1s ease-out;
    content: '';
    position: absolute;
    height: 10px;
    width: 50%;
    background: #0b9805;
    top: 0;
    left: 0;
    opacity: 0;
  }
  
  &:after {
    transition: all 1s ease-out;
    content: '';
    position: absolute;
    height: 10px;
    width: 50%;
    background: #097603;
    top: 0;
    left: 50%;
    opacity: 0;
  }

  &:hover {
    background-color: greenyellow;

    &::after, &::before {
      opacity: 1;
    }
  } */

  &::before {
    position: absolute;
    content: '';
    border-left: 10px solid transparent;
    border-top: 10px solid #26e11e;
    border-right: 10px solid transparent;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`