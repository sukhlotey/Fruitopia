// Dashboard.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/slices/apiSlice";
import { increment, decrement } from "../store/slices/counterSlice";
import Loading from "./Loading";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.data);
  // const count = useSelector((state) => state.counter.value);
  const cartItems = useSelector((state) => state.counter.history); // Get cart items
  useEffect(() => {
    dispatch(
      fetchData(
        "https://65fc7a699fc4425c653035f1.mockapi.io/api/v1/fruits/apple/fruit"
      )
    );
  }, [dispatch]);

  const incrementHandler = (item) => {
    dispatch(increment(item));
  };
  const decrementHandler = (id) => {
    dispatch(decrement(id));
  };
  return (
    <div className="dash-container">
      {loading && <Loading/>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2 className="head">FRUITS</h2>

          <div className="wrapped">
            {data.map((item) => (
              <div key={item.id} className="row">
                <div className="card">
                  <img src={item.avatar} alt="fruit-name" />
                  <div className="content">
                    <h3>{item.name}</h3>
                    <p>
                      <span className="span-price">Price:</span> ${item.price}
                    </p>
                    <div className="cart-btn">
                      <button className="plus" onClick={() => incrementHandler(item)}>
                        +
                      </button>
                      <p className="count-p">
                        {cartItems.filter((cartItem) => cartItem.id === item.id)
                          .length || 0}
                      </p>
                      <button className="minus" onClick={() => decrementHandler(item.id)}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
