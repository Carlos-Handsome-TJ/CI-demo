import * as React from "react";
import styled from "styled-components";

const Content = React.memo(() => {
  return <ContentContainer>222</ContentContainer>;
});

const ContentContainer = styled.div`
  width: 100%;
  height: 20rem;
  background: orange;
`;

export default Content;
