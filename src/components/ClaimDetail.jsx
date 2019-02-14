import React from "react";
import styled from "styled-components";

function ClaimDetail(props) {
  const { claim } = props; // const claim = props.claim
  return (
    <div>
      <StyledTitle>{(claim && claim.id) || "Claim Detail"}</StyledTitle>
      <StyledClaimDetail>
        {claim && (
          <div>
            <div>Type: {claim.type}</div>
            <div>Cause: {claim.cause}</div>
            <div>date: {claim.date}</div>
          </div>
        )}
      </StyledClaimDetail>
    </div>
  );
}

const StyledClaimDetail = styled.div`
  background-color: white;
  margin: 10px;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.18);
  min-height: 400px;
`;

const StyledTitle = styled.h2`
  margin: 10px;
  color: #383838;
`;

export default ClaimDetail;
