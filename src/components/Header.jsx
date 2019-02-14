import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  text-align: center;
`;

const StyledLogo = styled.img`
  height: 60px;
  margin-top: 20px;
`;

export default Header;
