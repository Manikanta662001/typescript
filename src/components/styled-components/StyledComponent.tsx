import React from "react";
// import styled from '@emotion/styled';
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
// import {} from ""

// const FlexBetween = styled.div({
//   display:'flex',
//   justifyContent:'space-between',
//   alignItems:'center'
// })
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyledComponent = () => {
  return (
    <div>
      <FlexBetween>
        <Typography variant="h1">one</Typography>
        <Typography variant="h1">Two</Typography>
      </FlexBetween>
    </div>
  );
};

export default StyledComponent;
