import React from "react";
import { Tooltip } from "antd";
import styled from "styled-components";

const StyledTooltip = styled(Tooltip)``;

const TooltipComponenet = ({ placement, title, children, ...rest }) => {
  return (
    <StyledTooltip placement={placement} title={title} {...rest}>
      {children}
    </StyledTooltip>
  );
};

TooltipComponenet.defaultProps = {
  placement: "right",
  title: "title"
};

export default TooltipComponenet;
