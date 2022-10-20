import React, { useEffect } from "react";
import styled from 'styled-components';
import AppIndex from "../pages";

export const GlobalsLayout = () => {
  return (
    <StyledLayout>
      <AppIndex />
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`