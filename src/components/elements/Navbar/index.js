import React from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

import { space, elSize } from "../../theme";
import { Logo } from "../Icons";

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

const Box = styled.div`
  display: flex;
  width: 40px;
  min-width: 40px;
  height: ${elSize.navHeight};
  box-shadow: ${props =>
    !props.hideSidebar ? "2px 0 4px -2px rgba(8, 27, 51, 0.2)" : "none"};
`;

const AdminToolbar = styled.div`
  display: flex;
  align-items: center;
`;
export default function NavBar(props) {
  // const { hideSidebar } = props;
  const springProps = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(0,-30px,0)"
    },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    delay: 200,
    config: config.gentle
  });

  return (
    <StyledContainer style={springProps}>
      <StyledLeftContainer>
        {/* <Box hideSidebar={hideSidebar}>logo</Box> */}
        <Logo />
      </StyledLeftContainer>
      <AdminToolbar>LOGIN</AdminToolbar>
    </StyledContainer>
  );
}
