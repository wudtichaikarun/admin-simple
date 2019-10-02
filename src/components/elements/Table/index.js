import React from "react";
import styled from "styled-components";
import { Table } from "antd";

import { MoreIcon } from "../Icons";
import { Popover, PopoverMenu, Tooltip } from "..";
import { fonts, fontSizes, palette } from "../../theme";
import { Body } from "../Text";

const StyledTable = styled(Table)`
  width: 100%;
  .ant-table-thead > tr > th {
    font-family: ${fonts.pro};
    font-weight: bold;
    font-size: ${fontSizes.xxs};
    border-bottom: none;
  }

  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: ${palette.primaryLightest};
  }

  .ant-table-tbody > tr > td {
    font-family: ${fonts.pro};
    font-size: ${fontSizes.xxs};
    border-color: ${palette.border};
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;

const StyledBodyText = styled(Body)`
  width: 170px;
  overflow: hidden;
  word-spacing: normal;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableComponent = props => {
  const { withEdit, withIndex, menuActions, page, limit } = props;
  let { columns, data } = props;

  const customizeData = () => {
    if (withIndex) {
      const pageIndex = page - 1;
      data = data.map((el, idx) => {
        const index = page && limit ? pageIndex * limit + (idx + 1) : idx + 1;
        return {
          ...el,
          columnNo: index
        };
      });
    }
  };

  const customizeColumn = () => {
    if (withEdit) {
      columns = [
        ...columns,
        {
          title: "",
          fixed: "right",
          render: record => (
            <Popover
              trigger="click"
              placement="bottomRight"
              offset={[0, -30]}
              content={
                <PopoverMenu
                  items={menuActions}
                  record={record}
                  pageHookProps={props.pageHookProps}
                />
              }
            >
              <IconWrapper>
                <MoreIcon active />
              </IconWrapper>
            </Popover>
          )
        }
      ];
    }
    if (withIndex) {
      columns = [
        {
          title: "#",
          dataIndex: "columnNo",
          key: "columnNo",
          width: 50
        },
        ...columns
      ];
    }

    columns = columns.map(col => {
      if (col.ellipsisText) {
        return {
          ...col,
          render: record => (
            <Tooltip key={col.dataIndex} title={record} placement="bottom">
              <StyledBodyText>{record}</StyledBodyText>
            </Tooltip>
          )
        };
      }
      if (col.dataIndex && col.key !== "columnNo") {
        return {
          ...col,
          render: record => {
            const title =
              record && record !== undefined && record ? record : "-";

            return title;
          }
        };
      }
      return col;
    });
  };

  customizeData();
  customizeColumn();

  return (
    <StyledTable
      {...props}
      columns={columns}
      dataSource={data}
      scroll={{ x: "100%" }}
    />
  );
};

TableComponent.defaultProps = {
  data: [],
  columns: []
};

export default TableComponent;
