import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const ProductComponent = () => {
  const { products } = useSelector((state) => state.Products);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const renderList =
    products &&
    products.map((product) => {
      const { _id, title, image, price, category } = product;
      return (
        <Grid item xs={3} key={_id}>
          <Link to={`/product/${_id}`}>
            <Card sx={{ height: "380px" }}>
              <div>
                <img src={image} alt={title} width="250" height="250" />
              </div>
              <CardContent>
                <Typography gutterBottom component="div">
                  {title}
                </Typography>

                <Typography variant="body2">₹{price}</Typography>
                <Typography variant="body2">{category}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      );
    });
  return <>{renderList}</>;
};

export default ProductComponent;
