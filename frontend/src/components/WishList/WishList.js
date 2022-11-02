import React, { useEffect, useCallback, useMemo } from "react";
import WishListComponent from "./WishListComponent";
import { useDispatch, useSelector } from "react-redux";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

const GridContainer = styled(Grid)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  @media (max-width: 1045px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
const WishList = () => {
  return (
    <>
      <br></br>
      <Container>
        <center>
          <h1>ALL PRODUCTS</h1>

          <hr></hr>
          
          <hr></hr>
        </center>
        <br></br>
        <Box>
          <br></br>
          <GridContainer>
            <WishListComponent />
          </GridContainer>
        </Box>
      </Container>
    </>
  );
};

export default WishList;
