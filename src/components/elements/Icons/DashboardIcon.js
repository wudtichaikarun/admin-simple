import React from "react";
import { palette } from "../../theme";

const DashboardIcon = ({ color, active }) => {
  const bgColor = active ? palette.primary : palette.grey40;
  const iconColor = color || bgColor;

  return (
    <svg
      id="dashboardIcon"
      data-name="DashboardIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      {active && (
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="1.366"
            y1="1.848"
            x2="0.082"
            y2="0.164"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#5bc6f0" />
            <stop offset="0.571" stopColor="#008cff" />
            <stop offset="1" stopColor="#2e6ae3" />
          </linearGradient>
        </defs>
      )}
      <path
        id="path"
        d="M4,7H7V4H4V7Zm4.5,9h3V13h-3v3ZM4,16H7V13H4v3Zm0-4.5H7v-3H4v3Zm4.5,0h3v-3h-3v3ZM13,4V7h3V4ZM8.5,7h3V4h-3V7ZM13,11.5h3v-3H13v3ZM13,16h3V13H13v3Z"
        transform="translate(-4 -4)"
        fillRule="evenodd"
        fill={active ? "url(#linear-gradient)" : iconColor}
      />
    </svg>
  );
};

export default DashboardIcon;
