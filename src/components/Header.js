import React from "react";
import styled from "styled-components";
import logo from "./../assets/ACMEinc.png";

const Logo = styled.img`
  width: 132px;
  top: 30px;
  left: 20px;
  position: absolute;
`;

const Header = () => <Logo src={logo} alt="Logo" />;

export default Header;
