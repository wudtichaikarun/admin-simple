import React from "react";
import styled, { css } from "styled-components";
import { fonts, fontSizes, palette } from "../theme";

const defaultStyled = css`
  display: ${props => (props.inline ? "inline-block" : "block")}
  margin: 0;
  padding: 0;
`;

const headerStyled = css`
  letter-spacing: "normal";
  font-family: ${fonts.noto};
  font-weight: 600;
  color: black;
`;

const StyledTitle = styled.h1`
  ${defaultStyled};
  ${headerStyled};
  font-size: ${fontSizes.sm};
`;

const StyledHeader = styled.h2`
  ${defaultStyled};
  ${headerStyled};
  font-size: ${fontSizes.xs};
`;

const StyledBody = styled.p`
  ${defaultStyled};
  font-family: ${fonts.pro};
  font-size: ${fontSizes.xxxs};
  font-weight: 400;
  color: black;
`;

const StyledCaption = styled.span`
  ${defaultStyled};
  font-family: ${fonts.pro};
  font-size: ${fontSizes.xxs};
  font-weight: 400;
  color: ${palette.grey50};
`;

const StyledLabel = styled.label`
  display: block;
  line-height: 1;
  font-family: ${fonts.noto};
  font-size: ${fontSizes.xxxs};
  font-weight: 400;
  color: black;
`;

const StyledCustom = styled.span`
  ${defaultStyled};
`;

export const Title = ({ children, ...rest }) => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};

export const Header = ({ children, ...rest }) => {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
};

export const Body = ({ children, ...rest }) => {
  return <StyledBody {...rest}>{children}</StyledBody>;
};

export const Caption = ({ children, ...rest }) => {
  return <StyledCaption {...rest}>{children}</StyledCaption>;
};

export const Label = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export const CustomText = ({ children, ...rest }) => {
  return <StyledCustom {...rest}>{children}</StyledCustom>;
};

export default {
  Title,
  Header,
  Body,
  Caption,
  Label,
  CustomText
};
