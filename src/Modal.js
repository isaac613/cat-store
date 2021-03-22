import React from "react";
import "./Modal.css";
import Cart from "./Cart";
export const Modal = ({ show, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>Basket</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content"></div>

      <div className="modal-body">Basket goes here</div>
      <div className="modal-footer">
        <button onClick={close} className="btn-cancel">
          Close
        </button>
      </div>
    </div>
  );
};
