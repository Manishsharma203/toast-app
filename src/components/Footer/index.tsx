import IconButton from "components/Buttons/IconButton";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import arrow from "assets/icons/arrow-right.png";
import { useAppDispatch, useAppSelector } from "redux/reduxHooks";
import { RootState } from "redux/store";
import { addToPrevOrders } from "redux/cart.slice";

export default function Footer() {
  const { pathname } = useLocation();
  return <>{pathname !== "/cart" ? <FooterBody1 /> : <FooterBody2 />}</>;
}

const FooterBody1 = () => {
  const { currentOrders } = useAppSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <IconButton iconName="bolt" />
      <IconButton iconName="book" />
      <IconButton
        onClick={() => navigate("cart")}
        iconName="cart"
        qty={Object.keys(currentOrders).length || undefined}
      />
    </div>
  );
};

const FooterBody2 = () => {
  const { currentOrders } = useAppSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={styles.root2}>
      <div className={styles.itemNumber}>
        <p className="textBody4">{Object.values(currentOrders).length} items</p>
      </div>
      <div
        className={styles.placeOrderContainer}
        onClick={() => {
          navigate("/");
          dispatch(addToPrevOrders());
        }}
      >
        <p className="textBody3">Place Order</p>
        <img className={styles.imgArrow} src={arrow} alt="arrow" />
      </div>
    </div>
  );
};
