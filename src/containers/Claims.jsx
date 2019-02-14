import React, { Component } from "react";
import styled from "styled-components";

import getClaims from "../services/claimsService";

import Header from "../components/Header";
import ClaimsList from "../components/ClaimsList";
import ClaimDetail from "../components/ClaimDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectClaim = this.selectClaim.bind(this);
    this.state = {
      claimsList: [],
      selectedClaim: null
    };
  }

  componentDidMount() {
    this.setState({ loadingClaims: true });
    getClaims().then(claimsList => {
      this.setState({ claimsList, loadingClaims: false });
    });
  }

  selectClaim(claim) {
    this.setState({ selectedClaim: claim });
  }

  render() {
    const { claimsList, selectedClaim, loadingClaims } = this.state;
    // eq:
    // const claimsList = state.claimsList;
    // const selectedClaim = state.selectedClaim;
    // const loadingClaims = state.loadingClaims;
    return (
      <StyledClaimsScreen>
        <Header />
        <StyledClaimsSection>
          <StyledClaimsListLayout>
            <ClaimsList
              loading={loadingClaims}
              claims={claimsList}
              claimClick={this.selectClaim}
            />
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
  width: 1200px;
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
