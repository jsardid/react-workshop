import React from "react";
import styled from "styled-components";

import ClaimsListItem from "./ClaimsListItem";

function ClaimsList(props) {
  const { claims, claimClick } = props; // eq. -> const claims = props.claims; const claimClick = props.claimClick
  return (
    <div>
      <StyledTitle>Claims List</StyledTitle>
      <StyledClaimList>
        {claims.map(claim => (
          <ClaimsListItem claim={claim} claimClick={claimClick} />
        ))}
      </StyledClaimList>
    </div>
  );
}

const StyledClaimList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledTitle = styled.h1`
  border-bottom: 5px solid rgb(255, 237, 0);
  margin: 10px;
  color: #383838;
`;

export default ClaimsList;
