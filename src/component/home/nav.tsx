import * as React from "react";
import styled from "styled-components";

interface initialNavList {
  name: string;
  icon: string;
}

const Nav = React.memo(() => {
  return (
    <NavContainer>
      <ToolList />
    </NavContainer>
  );
});

const ToolList: React.FC<{}> = React.memo(() => {
  const [navList, setNavList] = React.useState<initialNavList[] | null>([
    { name: "首页", icon: "#icon-shutiao" },
    { name: "动态", icon: "#icon-zhenzhunaicha" },
    { name: "热门", icon: "#icon-xuegao" },
    { name: "频道", icon: "#icon-kele" },
  ]);
  return (
    <>
      <UlContainer>
        {navList &&
          navList.map((item, index) => {
            return (
              <LiContainer key={item.name}>
                <AContainer>
                  <IconDivContainer>
                    <svg
                      className="icon"
                      style={{ fontSize: "2rem" }}
                      aria-hidden="true"
                    >
                      <use xlinkHref={item.icon}></use>
                    </svg>
                    <IConPContainer>{item.name}</IConPContainer>
                  </IconDivContainer>
                </AContainer>
              </LiContainer>
            );
          })}
      </UlContainer>
    </>
  );
});

const NavContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const UlContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 5rem;
  list-style: none;
  margin: 0;
  padding: 5rem 3rem;
  justify-content: space-between;
  align-items: center;
`;
const LiContainer = styled.li`
  width: 3.5rem;
  height: 3.5rem;
  background: skyblue;
  box-sizing: border-box;
  border-radius: 50%;
`;
const AContainer = styled.a`
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  color: #000;
`;
const IconDivContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  text-align: center;
`;
const IConPContainer = styled.p``;

export default Nav;
