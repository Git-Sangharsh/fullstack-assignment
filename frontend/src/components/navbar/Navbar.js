import React from "react";
import "./Navbar.css";
import logoSvg from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setShowAddCardBox } from "../../store/Store";

const Navbar = () => {
  const showAddCard = useSelector((state) => state.showAddCardBox);

  const dispatch = useDispatch();

  const handleAddCardBtn = () => {
    dispatch(setShowAddCardBox(!showAddCard));
  };
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-wrapper-logo">
          <img src={logoSvg} alt="" className="logo" />
          <h4>Abstract | Help Center</h4>
        </div>
        <button className="navbar-submit-btn" onClick={handleAddCardBtn}>
          Submit a Request
        </button>
      </div>
    </div>
  );
};

export default Navbar;
