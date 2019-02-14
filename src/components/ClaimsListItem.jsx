import React from "react";
import styled from "styled-components";

function ClaimsListItem(props) {
  const { claim, claimClick } = props; 
  // eq: 
  // const claim = props.claim; 
  // const claimClick = props.claimClick;
  return (
    <StyledClaimListItem onClick={() => claimClick(claim)}>
      {claim.id || "No ID"}
    </StyledClaimListItem>
  );
}

const StyledClaimListItem = styled.div`
  height: 50px;
  width: 150px;
  line-height: 50px;
  text-align: center;
  background-color: #505050;
  color: white;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default ClaimsListItem;
