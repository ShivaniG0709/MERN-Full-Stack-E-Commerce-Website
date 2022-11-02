import React, { useEffect, useCallback, useMemo, Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../actions/productAction";
import ProductComponent from "./ProductComponent";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Search from "./Search";
import { useParams } from "react-router-dom";
const Shop = () => {
  const { keyword } = useParams();

  const dispatch = useDispatch();

  const {
    products,
    loading,
    error,
    productsCount,

    filteredProductsCount,
  } = useSelector((state) => state.Products);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword));
  }, [dispatch, keyword, alert, error]);

  return (
    <>
      <Fragment>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Fragment>
            <br></br>
            <Container>
              <center>
                <h1>ALL PRODUCTS</h1>

                <hr></hr>
                <Search />
                <hr></hr>
              </center>
              <br></br>
              <Box sx={{ flexGrow: 1 }}>
                <br></br>
                <Grid container spacing={6}>
                  <ProductComponent />
                </Grid>
              </Box>
            </Container>
          </Fragment>
        )}
      </Fragment>
    </>
  );
};

export default Shop;
