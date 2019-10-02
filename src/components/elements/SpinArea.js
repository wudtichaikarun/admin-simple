import React from "react";
import styled from "styled-components";
import { Spin } from ".";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  left: 0;
  top: 0;
`;

const SpinArea = ({ loading }) => {
  return (
    <>
      {loading && (
        <Box>
          <Spin />
        </Box>
      )}
    </>
  );
};

export default SpinArea;
