import React from "react";
import styled from "styled-components";

import ClaimsListItem from "./ClaimsListItem";

function ClaimsList(props) {
  const { claims, claimClick, loading } = props;
  // eq:
  // const claims = props.claims;
  // const claimClick = props.claimClick;
  // const loading = props.loading;
  return (
    <div>
      <StyledTitle>Claims List</StyledTitle>
      {(loading && <StyledLoading>Loading Claims...</StyledLoading>) || (
        <StyledClaimList>
          {claims.map(claim => (
            <ClaimsListItem claim={claim} claimClick={claimClick} />
          ))}
        </StyledClaimList>
      )}
    </div>
  );
}

const StyledClaimList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLoading = styled.div`
  margin: 20px;
`;

const StyledTitle = styled.h1`
  border-bottom: 5px solid rgb(255, 237, 0);
  margin: 10px;
  color: #383838;
`;

export default ClaimsList;
