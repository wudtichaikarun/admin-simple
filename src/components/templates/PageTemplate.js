import React from "react";
import styled from "styled-components";
import Sidebar from "../elements/Sidebar/";
import Navbar from "../elements/Navbar/";

import { elSize, palette } from "../theme";
import sidebarMenu from "../../constants/sidebarMenu";

const StyledContainer = styled.div`
  height: 100%;
  overflow: hidden;
`;

const StyledBody = styled.div`
  display: flex;
  background: ${palette.bgPrimary};
  height: 100vh;
  padding-top: ${elSize.navHeight};
`;

const Box = styled.div`
  display: flex;
  flex: 1 100%;
  height: 100%;
  overflow: hidden;
`;

export default function PageTeamplate(props) {
  const { children, title, hideSidebar } = props;
  return (
    <StyledContainer>
      <Navbar hideSidebar={hideSidebar} title={title} key={`nav-${title}`} />
      <StyledBody>
        <Sidebar sidebarMenu={sidebarMenu} />
        <Box>{children}</Box>
      </StyledBody>
    </StyledContainer>
  );
}
