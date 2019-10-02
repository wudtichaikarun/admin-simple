import React from "react";
import styled from "styled-components";
import { Popover } from "antd";

const StyledPopover = styled(Popover)``;

const PopoverComponent = ({ content, children, ...rest }) => {
  return (
    <StyledPopover content={content} {...rest}>
      {children}
    </StyledPopover>
  );
};

PopoverComponent.defaultProps = {
  trigger: "click",
  placement: "bottom"
};

export default PopoverComponent;
