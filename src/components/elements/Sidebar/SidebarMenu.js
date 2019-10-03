import React from "react";
import styled from "styled-components";

import { space, palette } from "../../theme";
import { OutlineButton, Tooltip } from "..";

const StyledButton = styled(OutlineButton)`
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
        <Tooltip key={el.id} title={el.id} align={{ offset: [-12, 0] }}>
          <StyledButton to={el.to} key={el.id}>
            {el.icon}
          </StyledButton>
        </Tooltip>
      ))}
    </div>
  );
}
