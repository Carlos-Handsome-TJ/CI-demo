import * as React from "react";
import styled from "styled-components";

const UserInfo = React.memo(() => {
  return <UserInfoContainer></UserInfoContainer>;
});

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;

export default UserInfo;
