import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  align-self: center;
  text-align: center;
  margin: 5px 0 1px;
  width: 300px;
  height: 53px;
  color: white;
  font-family: "SfProBold";
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  white-space: nowrap;
  text-transform: uppercase;
  background-color: #4C7DD9;
  border: none;
  border-radius: 3em;
  cursor: pointer;
  outline: 0;
  @media (max-width: 640px) {
    width: 220px;
  }
`;

const Button = ({ onClick }) => (
  <StyledButton onClick={onClick}>Agree and Connect</StyledButton>
);

export default Button;
