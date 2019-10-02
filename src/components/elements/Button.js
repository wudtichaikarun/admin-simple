import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { palette, fonts, fontSizes } from "../theme";

const defaultStyled = css`
  display: inline-flex;
  padding: 0;
  font-family: ${fonts.display};
  align-items: center;
  white-space: nowrap;
  font-size: ${props => (props.mini ? fontSizes.xxs : fontSizes.sm)};
  border: none;
  justify-content: center;
  text-decoration: none;
  appearance: none;
  box-sizing: border-box;
  color: white;
  cursor: ${props => (props.disabled ? "disabled" : "pointer")};

  &:hover {
    opacity: 0.8;
  }

  &:focus,
  &:active {
    outline: none;
    text-decoration: none;
  }
`;

const primaryStyled = css`
  font-weight: 300;
  padding: 6px 20px;
  letter-spacing: 1px;
  border-radius: 2px;
  background-image: ${palette.primaryGradiant};
  box-shadow: 0 2px 3px 0 rgba(77, 156, 251, 0.3);
  color: white;

  &:hover {
    color: white;
    opacity: 1;
    box-shadow: 1px 2px 3px 1px rgba(77, 156, 251, 0.5);
  }

  &:active {
    box-shadow: 1px 2px 3px 1px rgba(77, 156, 251, 0.7);
  }

  ${props =>
    props.disabled &&
    `background-color: ${palette.grey20}; background-image: none; cursor: not-allowed;`};
`;

const StyledLink = styled(Link)`
  ${defaultStyled}
  ${props => props.styledcss || primaryStyled};
`;
const Anchor = styled.a`
  ${defaultStyled}
  ${props => props.styledcss || primaryStyled};
`;
const StyledButton = styled.button`
  ${defaultStyled}
  ${props => props.styledcss || primaryStyled};
`;

const Button = ({ type, children, ...props }) => {
  const { to, href } = props;
  if (to) {
    return (
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    );
  }
  if (href) {
    return <Anchor {...props}>{children}</Anchor>;
  }
  return (
    <StyledButton {...props} type={type}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  styledcss: primaryStyled
};

export default Button;
