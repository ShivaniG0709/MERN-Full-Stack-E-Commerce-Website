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
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../actions/wishlistAction";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../actions/cartAction";
const ProductCard = styled(Card)`
  height: 100%;
  padding: 1rem;
  @media (max-width: 580px) {
    width: 280px;
  }
`;
const ProductGrid = styled(Grid)``;

const WishListComponent = () => {
  const { wishList } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const remove = (e) => {
    dispatch(removeFromWishlist(e));
  };
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Product added to cart");
  };

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const renderList =
    wishList &&
    wishList.map((product) => {
      const { _id, title, image, price, category } = product;
      return (
        <ProductGrid>
          <ProductCard className="productResponsive">
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
            <CardActions>
              <Button
                variant="contained"
                size="small"
                onClick={() => send(product)}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={() => remove(product)}
              >
                Remove
              </Button>
            </CardActions>
          </ProductCard>
        </ProductGrid>
      );
    });
  return <>{renderList}</>;
};

export default WishListComponent;
