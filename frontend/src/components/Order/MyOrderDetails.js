import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  getOrderDetails,
  clearErrors,
  deleteOrder,
} from "../../actions/orderAction";
import Button from "@mui/material/Button";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import { useNavigate } from "react-router-dom";
const MyOrderDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId } = useParams();
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert("Order Deleted Successfully");
      navigate("/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getOrderDetails(orderId));
  }, [dispatch, alert, error, orderId, deleteError, isDeleted]);
  return (
    <Fragment>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Fragment>
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Your Order with OrderID #{order && order._id}
              </Typography>
              <Typography>Shipping Info</Typography>

              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order && order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order && order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order &&
                      order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order &&
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    Payment Status :
                    {order &&
                    order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>{order && order.totalPrice && order.totalPrice}</span>
                </div>
                <div>
                  <p>Paid at:</p>
                  <span>{order && order.paidAt && order.paidAt}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order &&
                      order.orderStatus &&
                      order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order && order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.qnty} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.qnty}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <center>
              <Button
                color="error"
                size="large"
                variant="contained"
                onClick={() => deleteOrderHandler(order._id)}
              >
                Cancel Order
              </Button>
            </center>
            <br></br>
            <br></br>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MyOrderDetails;
