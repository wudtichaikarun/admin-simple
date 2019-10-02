import React from "react";
import _get from "lodash/get";
import { Popconfirm } from "antd";
import styled from "styled-components";

import { OutlineButton } from ".";
import { space, fontSizes, fonts } from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${space.md};
  border-radius: 1px;
  box-shadow: 0 2px 4px 0 rgba(8, 27, 51, 0.2);
  background: white;
`;

const StyledOutlineButton = styled(OutlineButton)`
  justify-content: flex-start;
  font-family: ${fonts.pro};
  background: transparent;
  font-size: ${fontSizes.xxxs};
  border-bottom: ${props => (props.hasborder ? `1px solid #ebedf4` : "none")};

  padding: 7px 0;
`;

const PopoverMenu = ({ items, record, pageHookProps }) => {
  const itemList = items.map((item, idx) => {
    const key = `${item.title}-${idx}`;
    const onClick = item.confirmText
      ? null
      : () => item.onClick(record, pageHookProps);

    const button = (
      <StyledOutlineButton
        hasborder={idx < items.length - 1}
        key={key}
        onClick={onClick}
        to={item.to}
      >
        {item.title}
      </StyledOutlineButton>
    );

    const renderMenuItem = () => {
      return item.confirmText ? (
        <Popconfirm
          key={key}
          overlayClassName="alert-confirm"
          title={item.confirmText}
          onConfirm={() => item.onClick(record, pageHookProps)}
        >
          {button}
        </Popconfirm>
      ) : (
        button
      );
    };

    const renderMenu = () => {
      if (item.requiredFields) {
        if (item.requiredFields.some(field => _get(record, field, false))) {
          return renderMenuItem();
        }
        return null;
      }
      return renderMenuItem();
    };

    return renderMenu();
  });

  return <Container>{itemList}</Container>;
};

export default PopoverMenu;
