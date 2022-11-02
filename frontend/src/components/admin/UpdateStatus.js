import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./login.css";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../actions/orderAction";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import { useNavigate } from "react-router-dom";
const UpdateStatus = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);
  const [status, setStatus] = useState({
    orderStatus: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setStatus({ ...status, [name]: value });
  };
  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(updateOrder(orderId, status));
  };
  console.log(status);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert("Status Updated Successfully");
      navigate("/admin/All-orders");
      dispatch({ type: UPDATE_ORDER_RESET });
    }
  }, [dispatch, alert, isUpdated, orderId, order, updateError]);

  return (
    <div className="login-page">
      <form onSubmit={updateOrderSubmitHandler}>
        <h2>Update Status</h2>
        <input
          type="text"
          name="orderStatus"
          required
          placeholder="Status"
          value={status.orderStatus}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStatus;
