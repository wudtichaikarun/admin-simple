import React from "react";
import styled from "styled-components";
import { Pagination } from "antd";
import { space, palette } from "../theme";

const StyledPagination = styled(Pagination)`
  outline: none;
  .ant-pagination-item {
    border-radius: 1px;
    color: gray !important;
    width: ${space.xxl};
    height: ${space.xxl};
    border: none;
    z-index: 100;
    a {
      color: grey;
    }
    &:hover {
      background-color: ${palette.primaryLightest};
    }
    &:hover > a {
      color: ${palette.primary};
    }
  }
  .ant-pagination-item-active {
    background-color: ${palette.primary};

    &:hover {
      background-color: ${palette.primary};
    }

    & > a {
      color: ${palette.white} !important;
    }
  }
  .ant-pagination-item-link {
    border: none;
    color: gray;
  }
  color: gray;
  font-size: 13px;
`;

const PaginationComponent = props => {
  return <StyledPagination {...props} />;
};

export default PaginationComponent;
