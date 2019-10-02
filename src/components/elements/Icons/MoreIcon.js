import React from "react";
import { palette } from "../../theme";

const BagIcon = ({ color, active }) => {
  const bgColor = active ? palette.primary : palette.grey80;
  const iconColor = color || bgColor;

  return (
    <svg
      id="Group_273"
      data-name="Group 273"
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="12"
      viewBox="0 0 3 12"
    >
      <path
        id="icon-more-icon"
        d="M9,3.5A1.5,1.5,0,1,1,7.5,2,1.5,1.5,0,0,1,9,3.5Zm-1.5,3A1.5,1.5,0,1,0,9,8,1.5,1.5,0,0,0,7.5,6.5Zm0,4.5A1.5,1.5,0,1,0,9,12.5,1.5,1.5,0,0,0,7.5,11Z"
        transform="translate(-6 -2)"
        fill={iconColor}
      />
    </svg>
  );
};

export default BagIcon;
