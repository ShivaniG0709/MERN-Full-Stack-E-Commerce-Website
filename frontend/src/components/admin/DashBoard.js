import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ListAltIcon from "@mui/icons-material/ListAlt";
import QueueIcon from "@mui/icons-material/Queue";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../actions/userAction.js";
import { getProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import axios from "axios";
import "./DashBoard.css";
const DashBoard = () => {
  const dispatch = useDispatch();
  

  const { products } = useSelector((state) => state.Products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getProduct());
   
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }} style={{ background: "#fce4ec" }}>
      <br></br>
      <br></br>
      <Grid
        container
        spacing={2}
        
        height="500px"
      >
        <Grid item xs={2} style={{ background: "#f8bbd0" }}>
          <Link
            to="/admin/All-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              <ListAltIcon /> All Products
            </h2>
          </Link>
          <br></br>
          <Link
            to="/admin/Add-products"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              <QueueIcon /> Add Products
            </h2>
          </Link>
          <br></br>
          <Link
            to="/admin/users"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              <PersonIcon /> All Users
            </h2>
          </Link>
          <br></br>
          <Link
            to="/admin/All-orders"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>
              <ListAltIcon /> All Orders
            </h2>
          </Link>
          <br></br>
         
        </Grid>
        <Grid container item xs={10}>
          <Grid item xs={4}>
            <center>
              <div className="dashboardSummaryBox2">
                <Link
                  to="/admin/All-products"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>Products</p>
                  <p>{products && products.length}</p>
                </Link>
              </div>
            </center>
          </Grid>
          <Grid item xs={4}>
            <center>
              <div className="dashboardSummaryBox2">
                <Link
                  to="/admin/All-orders"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>Orders</p>
                  <p>{orders && orders.length}</p>
                </Link>
              </div>
            </center>
          </Grid>
        
          <Grid item xs={4}>
            <center>
              <div className="dashboardSummaryBox2">
                <Link
                  to="/admin/users"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>Users</p>
                  <p>{users && users.length}</p>
                </Link>
              </div>
            </center>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
