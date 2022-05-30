import * as React from "react";
import Nav from "./nav";
import styled from "styled-components";
import Header from "./header";
import UserInfo from "./userInfo";

const HomePage = React.memo(() => {
  return (
    <>
      <HomeContainer>
        <Nav />
        <Header />
        <UserInfo />
      </HomeContainer>
    </>
  );
});

export default HomePage;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  //@media (max-width: 600px) {
  //}
  //@media (min-width: 600px) and (max-width: 1200px) {
  //}
  //@media (min-width: 1200px) {
  //}
`;
