import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { getAllOrders, clearErrors } from "../../actions/orderAction";

const OrderList = () => {
  const dispatch = useDispatch();

  const { error, orders, loading } = useSelector((state) => state.allOrders);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <Box component="span">
            <center>
              <h1>ALL ORDERS</h1>
            </center>
            <hr></hr>
            <Container>
              <TableContainer>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                  <TableHead style={{ background: "#f8bbd0" }}>
                    <TableRow>
                      <TableCell style={{ fontSize: "15pt" }}>
                        {" "}
                        Sr. No.
                      </TableCell>
                      <TableCell style={{ fontSize: "15pt" }}> ID</TableCell>
                      <TableCell style={{ fontSize: "15pt" }}>
                        {" "}
                        Status
                      </TableCell>
                      <TableCell style={{ fontSize: "15pt" }}>
                        Quantity
                      </TableCell>
                      <TableCell style={{ fontSize: "15pt" }}>
                        {" "}
                        Amount
                      </TableCell>
                      <TableCell style={{ fontSize: "15pt" }}>
                        {" "}
                        Update Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders &&
                      orders.map((product, index) => (
                        <TableRow key={product._id}>
                          <TableCell align="left">{index + 1}</TableCell>
                          <TableCell align="left">
                            {" "}
                            <Link to={`/admin/order/${product._id}`}>
                              {product._id}
                            </Link>
                          </TableCell>
                          <TableCell align="left">
                            {product.orderStatus}
                          </TableCell>
                          <TableCell align="left">
                            {product.orderItems.length}
                          </TableCell>
                          <TableCell align="left">
                            {product.totalPrice}
                          </TableCell>
                          <TableCell align="left">
                            {" "}
                            <Link
                              to={`/admin/${product._id}/update-order`}
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <Button
                                color="primary"
                                size="small"
                                variant="contained"
                              >
                                Update
                              </Button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderList;
