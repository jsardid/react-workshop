import React, { Component } from "react";
import styled from "styled-components";

import claimsListData from "../services/claimsService";

import Header from "../components/Header";
import ClaimsList from "../components/ClaimsList";
import ClaimDetail from "../components/ClaimDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectClaim = this.selectClaim.bind(this);
    this.state = {
      claimsList: claimsListData,
      selectedClaim: null
    };
  }

  selectClaim(claim) {
    this.setState({ selectedClaim: claim });
  }

  render() {
    const { claimsList, selectedClaim } = this.state;
    return (
      <StyledClaimsScreen>
        <Header />
        <StyledClaimsSection>
          <StyledClaimsListLayout>
            <ClaimsList claims={claimsList} claimClick={this.selectClaim} />
          </StyledClaimsListLayout>
          <StyledClaimDetailLayout>
            <ClaimDetail claim={selectedClaim} />
          </StyledClaimDetailLayout>
        </StyledClaimsSection>
      </StyledClaimsScreen>
    );
  }
}

const StyledClaimsScreen = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledClaimsSection = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  background-color: #c7c7c7;
  margin: 30px auto;
  padding: 20px;
  border-radius: 5px;
`;

const StyledClaimsListLayout = styled.div`
  width: 50%;
`;

const StyledClaimDetailLayout = styled.div`
  width: 50%;
`;

export default App;
