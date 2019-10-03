import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { Breadcrumb } from "antd";
import iconSelect from "../../assets/images/icon-select.svg";

import { useTs } from "../../hooks";
import { space, elSize } from "../theme";

const Container = styled(animated.div)`
  background: white;
  width: ${props => props.width || "100%"};
  height: ${elSize.subNavHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${space.lg};
  border-bottom: 1px solid #ebedf4;
  position: fixed;
  z-index: 8;
`;

const StyledIcon = styled.img`
  transform: rotate(270deg);
  opacity: 0.5;
  margin-bottom: 2px;
`;

const BreadcrumbComponent = ({ items, width, children }) => {
  const styles = useTs({});
  const itemList = items.map((item, idx) => {
    if (item.link)
      return (
        <Breadcrumb.Item href={item.link} key={`${item.text}-${idx}`}>
          {item.text}
        </Breadcrumb.Item>
      );
    return (
      <Breadcrumb.Item key={`${item.text}-${idx}`}>{item.text}</Breadcrumb.Item>
    );
  });
  return (
    <Container style={styles} width={width}>
      <Breadcrumb separator={<StyledIcon alt="arrow" src={iconSelect} />}>
        {itemList}
      </Breadcrumb>
      {children}
    </Container>
  );
};

export default BreadcrumbComponent;
