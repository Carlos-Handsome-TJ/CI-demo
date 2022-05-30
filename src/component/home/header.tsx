import * as React from "react";
import { Carousel, Image } from "antd";
import styled from "styled-components";
import Content from "./content";
import Nav_1 from "../../assets/images/nav1.jpg";
import Nav_2 from "../../assets/images/nav2.jpg";

const Header = React.memo(() => {
  return (
    <HeaderContainer>
      <Carousel autoplay>
        <ImgContainer>
          <img src={Nav_1} width={"auto"} height={"100%"} />
        </ImgContainer>
        <ImgContainer>
          <img src={Nav_2} width={"auto"} height={"100%"} />
        </ImgContainer>
      </Carousel>
      <Content />
    </HeaderContainer>
  );
});
const HeaderContainer = styled.div`
  width: 100vh;
  height: 18rem;
  box-sizing: border-box;
  background: green;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 18rem;
  background: #000;
`;

export default Header;
