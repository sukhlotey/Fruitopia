import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/slices/counterSlice";
import {useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = useSelector((state) => state.counter.history);

  const removeHandler = (id) => {
    dispatch(remove(id));
  };

  const backHandler = () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const totalPrice = history.reduce((acc, item) => acc + item.price, 0);
  return (
    <>

      <div className="back-btn" onClick={backHandler}>
        <i className="bi bi-arrow-left"></i>
      </div>
      <div className="total-price-div">
          <p className="price-count"><span className="total-price-bold">Total Price:</span> ${totalPrice.toFixed(2)}</p>
        </div>

      <div className="cart-container">
        {history.length === 0 ? (
          <div className="empty">E.M.P.T.Y</div>
        ) : (
          <div className="wrapped">
            {history.map((item) => (
              <div key={Math.floor(Math.random() * 100)} className="row">
                <div className="card">
                  <img src={item.avatar} alt="fruit-name" />
                  <div className="content">
                    <h3>{item.name}</h3>
                    <p>
                      <span className="span-price">Price:</span> ${item.price}
                    </p>
                    <button
                      className="remove-btn"
                      onClick={() => removeHandler(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
