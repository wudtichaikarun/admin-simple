import React from "react";
import { css } from "styled-components";
import Button from "./Button";
import { fontSizes, palette } from "../theme";

const outlineStyled = css`
  color: black;
  background: none;
  font-size: ${fontSizes.md};

  &:hover {
    color: ${palette.primary};
  }
`;

const OutlineButton = ({ children, ...rest }) => {
  return (
    <Button {...rest} styledcss={outlineStyled}>
      {children}
    </Button>
  );
};

export default OutlineButton;
