import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { register, clearErrors } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated, loading } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    dispatch(register(user));
  };
  useEffect(() => {
    if (error) {
      alert(error);

      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, error, alert, isAuthenticated]);

  return (
    <div className="login-page">
      <form onSubmit={registerSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          value={user.name}
          onChange={onChangeInput}
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={onChangeInput}
        />

        <input
          type="password"
          name="password"
          required
          autoComplete="on"
          placeholder="Password"
          value={user.password}
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Register</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
