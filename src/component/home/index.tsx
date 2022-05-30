import * as React from "react";
import Nav from "./nav";
import styled from "styled-components";

const HomePage = React.memo(() => {
  return (
    <>
      <HomeContainer>2222</HomeContainer>
    </>
  );
});

export default HomePage;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: orange;
  @media (max-width: 600px) {
  }
  @media (min-width: 600px) and (max-width: 1200px) {
  }
  @media (min-width: 1200px) {
  }
`;
