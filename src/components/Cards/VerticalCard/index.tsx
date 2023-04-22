import React, { useState } from "react";
import styles from "./styles.module.css";
import v_img from "assets/images/vertical_card.png";
import veg_icon from "assets/icons/veg.png";
import AddButton from "components/Buttons/AddButton";
import { SingleItem } from "utils/types";
import { useAppDispatch, useAppSelector } from "redux/reduxHooks";
import { RootState } from "redux/store";
import { decrementQty, incrementQty } from "redux/cart.slice";

interface IProps {
  item: SingleItem;
}
export default function VerticalCard(props: IProps) {
  const { item } = props;
  const { currentOrders } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.imgContainer}>
        <img src={v_img} alt="v_img" />
      </div>
      <div className={styles.infoContainer}>
        <img className={styles.vegIcon} src={veg_icon} alt="veg_icon" />
        <p className="textBody2">{item.name}</p>
      </div>
      <div className={styles.btnContainer}>
        <p className="textBody3">₹{item.price}</p>
        <AddButton
          quantity={currentOrders[item.id] ? currentOrders[item.id].qty : 0}
          onAdd={() => dispatch(incrementQty(item))}
          onRemove={() => dispatch(decrementQty(item))}
        />
      </div>
    </div>
  );
}
