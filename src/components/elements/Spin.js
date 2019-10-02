import React from "react";
import { Icon, Spin } from "antd";

const SpinComponent = () => {
  const antIcon = <Icon type="loading" style={{ fontSize: 36 }} spin />;
  return <Spin indicator={antIcon} />;
};

export default SpinComponent;
