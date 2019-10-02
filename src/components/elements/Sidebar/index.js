import React from "react";
import styled from "styled-components";

import SidebarMenu from "./SidebarMenu";
import { elSize } from "../../theme";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-shadow: 0 1px 3px 0 rgba(8, 27, 51, 0.2);
  background-color: #ffffff;
  width: ${elSize.navWidth};
  height: calc(100% - 55px);
  z-index: 9;
`;
export default function Sidebar(props) {
  const { sidebarMenu } = props;
  return (
    <StyledContainer>
      <SidebarMenu menuList={sidebarMenu} />
    </StyledContainer>
  );
}
