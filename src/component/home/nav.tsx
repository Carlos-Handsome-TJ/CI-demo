import * as React from "react";
import styled from "styled-components";

const Nav = React.memo(() => {
  return (
    <NavContainer>
      <ToolList />
    </NavContainer>
  );
});

const ToolList = React.memo(() => {
  return (
    <>
      <UlContainer>
        <LiContainer>
          <i className={"iconfont"}>&#xe658;</i>
          首页
        </LiContainer>
        <LiContainer>
          <i className={"iconfont"}>&#xe659;</i>
          动态
        </LiContainer>
        <LiContainer>
          <i className={"iconfont"}>&#xe65a;</i>
          热门
        </LiContainer>
        <LiContainer>
          <i className={"iconfont"}>&#xe65c;</i>
          频道
        </LiContainer>
      </UlContainer>
    </>
  );
});

const NavContainer = styled.div`
  width: 100%;
  height: 100vh;
  //background: blue;
`;
const UlContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  //background: red;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;
const LiContainer = styled.li`
  padding: 0 1rem;
`;

export default Nav;
