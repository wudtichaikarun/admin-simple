import React from "react";
import * as R from "ramda";
import TablePagination from "../../../components/elements/Table/TablePagination";
import styled from "styled-components";
import { getAllRules } from "../../../models/ruleAccess";
import { space } from "../../../components/theme";
import { Breadcrumb } from "../../../components/elements";

const BoxSpace = styled.div`
  span + span {
    padding-left: 1px;
  }
`;

const columns = [
  {
    title: "Rule ID",
    dataIndex: "_id",
    key: "_id"
  },
  {
    title: "Rule Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Rule Type",
    key: "ruleType",
    render: record => {
      const type = R.path(["configs", "type"], record);
      return <span>{type || "-"}</span>;
    }
  },
  {
    title: "Input Keys",
    key: "inputKeys",
    render: record => {
      const inputKeys = R.path(["inputKeys"], record);
      return R.isEmpty(inputKeys)
        ? "-"
        : inputKeys.map(key => (
            <BoxSpace>
              <span>{key}</span>
            </BoxSpace>
          ));
    }
  },
  {
    title: "Query",
    key: "query",
    render: record => {
      const query = R.path(["query"], record);
      const condition = R.path(["condition"], query);
      const rules = R.path(["rules"], query);
      const ruleConditon =
        rules &&
        rules.map(
          rule =>
            `${rule.field || "-"} $${rule.operator || "-"} ${rule.inputKey ||
              "-"}`
        );
      return !query ? "-" : <span>{`$${condition} [${ruleConditon}]`}</span>;
    }
  },
  {
    title: "Output Keys",
    key: "outputKeys",
    render: record => {
      const outputKeys = R.path(["outputKeys"], record);
      return R.isEmpty(outputKeys)
        ? "-"
        : outputKeys.map(key => (
            <BoxSpace>
              <span>{key}</span>
            </BoxSpace>
          ));
    }
  },
  {
    title: "Change Output Key Name",
    key: "changeOutputKeysName",
    render: record => {
      const changeOutputKeysName = R.path(["changeOutputKeysName"], record);
      return R.isEmpty(changeOutputKeysName)
        ? "-"
        : changeOutputKeysName.map(el => (
            <BoxSpace>
              <span>{`${el.fromKeyName}  --to--  ${el.toKeyName}`}</span>
            </BoxSpace>
          ));
    }
  }
];

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Box = styled.div`
  margin: ${space.xl};
  margin-top: 75px;
`;

export default function ListDispatch() {
  return (
    <Container>
      <Breadcrumb items={[{ text: <b>Dispatch Rule</b> }]} />
      <Box>
        <TablePagination
          width="calc(100% - 100px)"
          height="calc(100% - 220px)"
          model={getAllRules}
          columns={columns}
          rowKey="_id"
          withIndex
          withFilter
        />
      </Box>
    </Container>
  );
}
