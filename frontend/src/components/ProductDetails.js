import React, { useEffect, Fragment } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { addToWishlist } from "../actions/wishlistAction";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clearErrors, getProductDetails } from "../actions/productAction";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.wishlist);
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  const { _id, image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const favourite = (e) => {
    dispatch(addToWishlist(e));
    alert("Product added to wishlist");
    navigate("/products");
  };
  const send = (e) => {
    dispatch(addToCart(e));
    alert("Product added to cart");
    navigate("/products");
  };
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(productId));
  }, [dispatch, alert, error]);
  return (
    <>
      <Fragment>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <Fragment>
            <br></br>
            <div className="ui grid container">
              {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
              ) : (
                <div className="ui placeholder segment">
                  <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                      <div className="column lp">
                        <img
                          className="ui fluid "
                          src={image}
                          width="300"
                          height="350"
                        />
                      </div>
                      <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                          <a className="ui teal tag label">₹{price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                        <p>{description}</p>
                        {isAuthenticated && user.role === "user" ? (
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => favourite(product)}
                          >
                            Wishlist
                          </Button>
                        ) : (
                          <></>
                        )}
                        {isAuthenticated && user.role === "user" ? (
                          <Button
                            variant="contained"
                            onClick={() => send(product)}
                          >
                            Add to cart
                          </Button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Fragment>
        )}
      </Fragment>
    </>
  );
};

export default ProductDetails;
