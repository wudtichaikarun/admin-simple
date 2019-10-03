import React from "react";

const SearchIcon = ({ color, size }) => {
  return (
    <svg
      id="Group_203"
      data-name="Group 203"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14.986 14.998"
    >
      <defs>
        <clipPath id="clip-path">
          <path
            id="Path_326"
            data-name="Path 326"
            d="M14.791,1.861,11.377-1.551a6.379,6.379,0,0,0,1.436-4.042A6.406,6.406,0,0,0,6.407-12,6.406,6.406,0,0,0,0-5.593,6.406,6.406,0,0,0,6.407.813,6.372,6.372,0,0,0,10.434-.611L13.848,2.8a.666.666,0,0,0,.943-.941ZM8.433-.795a5.166,5.166,0,0,1-2.026.408A5.2,5.2,0,0,1,4.38-.795,5.206,5.206,0,0,1,2.724-1.911,5.187,5.187,0,0,1,1.608-3.567,5.166,5.166,0,0,1,1.2-5.593,5.2,5.2,0,0,1,1.608-7.62,5.206,5.206,0,0,1,2.724-9.276,5.187,5.187,0,0,1,4.38-10.392,5.167,5.167,0,0,1,6.407-10.8a5.2,5.2,0,0,1,2.026.408,5.206,5.206,0,0,1,1.656,1.116A5.169,5.169,0,0,1,11.205-7.62a5.167,5.167,0,0,1,.408,2.026,5.2,5.2,0,0,1-.408,2.026,5.206,5.206,0,0,1-1.116,1.656A5.233,5.233,0,0,1,8.433-.795Z"
            transform="translate(0 12)"
            fill={color}
            clipRule="evenodd"
          />
        </clipPath>
        <clipPath id="clip-path-2">
          <path
            id="Path_325"
            data-name="Path 325"
            d="M-457,839.255H1192.324V-256H-457Z"
            transform="translate(457 256)"
            fill={color}
          />
        </clipPath>
      </defs>
      <g id="Group_57" data-name="Group 57" clipPath="url(#clip-path)">
        <g
          id="Group_56"
          data-name="Group 56"
          transform="translate(-588.86 -314.402)"
          clipPath="url(#clip-path-2)"
        >
          <path
            id="Path_324"
            data-name="Path 324"
            d="M-5,10.883H22.871V-17H-5Z"
            transform="translate(587.418 324.96)"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

SearchIcon.defaultProps = {
  color: "#004cff",
  size: 14.986
};

export default SearchIcon;
