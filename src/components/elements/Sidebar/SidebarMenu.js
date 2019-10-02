import React from "react";
import styled from "styled-components";

import { space, palette } from "../../theme";

const StyledButton = styled.div`
  width: 100%;
  padding: ${space.md};

  &:hover {
    opacity: 1;
    background: ${palette.primaryLightest};
  }
`;

export default function SidebarMenu(props) {
  const { menuList } = props;
  return (
    <div>
      {menuList.map(el => (
        <StyledButton>{el.icon}</StyledButton>
      ))}
    </div>
  );
}
