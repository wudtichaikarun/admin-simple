import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";

import { space, elSize } from "../../theme";
import { Logo } from "../Icons";
import useTranslateSpring from "../../../hooks/useTranslateSpring";

const StyledContainer = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${space.md};
  position: fixed;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(8, 27, 51, 0.2);
  z-index: 10;
  height: ${elSize.navHeight};
  width: 100%;
`;

const StyledLeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AdminToolbar = styled.div`
  display: flex;
  align-items: center;
`;
export default function NavBar(props) {
  // const { hideSidebar } = props;
  const springProps = useTranslateSpring({
    x: 0,
    y: "-30px",
    z: 0,
    delay: 50
  });
  return (
    <StyledContainer style={springProps}>
      <StyledLeftContainer>
        <Logo />
      </StyledLeftContainer>
      <AdminToolbar>LOGIN</AdminToolbar>
    </StyledContainer>
  );
}
