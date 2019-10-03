import React from "react";
import styled from "styled-components";

import { Select } from "antd";
import iconSelect from "../../assets/images/icon-select.svg";
import { space, palette } from "../theme";

const { Option } = Select;

const StyledSelect = styled(Select)`
  && {
    width: ${props => props.width};
  }

  .ant-select-arrow {
    margin-top: -2px;
  }

  .ant-select-selection {
    ${props => props.isoutline && `border: 1px solid transparent;`};
  }

  .ant-select-selection-selected-value {
    padding-right: ${space.sm};
  }

  .ant-select-selection:hover {
    border: 1px solid ${palette.primary};
  }

  .ant-select-focused .ant-select-selection,
  .ant-select-selection:focus,
  .ant-select-selection:active {
    border: 1px solid ${palette.primary};
  }
`;

const StyledOption = styled(Option)``;

const SelectComponent = ({ options, isoutline, ...rest }) => {
  return (
    <StyledSelect
      {...rest}
      isoutline={isoutline}
      suffixIcon={<img src={iconSelect} alt="arrow-down" />}
    >
      {options.map((opt, idx) => (
        <StyledOption
          key={`${opt.value}-${idx}`}
          value={opt.value}
          disabled={opt.disabled}
        >
          {opt.title}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

SelectComponent.defaultProps = {
  width: "100px"
};

export default SelectComponent;
