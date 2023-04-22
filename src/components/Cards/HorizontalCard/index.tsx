import React from "react";
import styles from "./styles.module.css";
import h_img from "assets/images/horizontal_card.png";
import AddButton from "components/Buttons/AddButton";
import veg_icon from "assets/icons/veg.png";
import { SingleItem } from "utils/types";
import { useAppDispatch, useAppSelector } from "redux/reduxHooks";
import { RootState } from "redux/store";
import { decrementQty, incrementQty } from "redux/cart.slice";

interface IProps {
  item: SingleItem;
}
export default function HorizontalCard(props: IProps) {
  const { item } = props;
  const { currentOrders } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.root}>
      <div className={styles.imgContainer}>
        <img src={h_img} alt="h_img" />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <p className="textBody1">{item.name}</p>
        </div>
        <div className={styles.btnContainer}>
          <div className={styles.price}>
            <img className={styles.vegIcon} src={veg_icon} alt="veg_icon" />
            <p className="textBody2">₹{item.price}</p>
          </div>
          <AddButton
            quantity={currentOrders[item.id] ? currentOrders[item.id].qty : 0}
            onAdd={() => dispatch(incrementQty(item))}
            onRemove={() => dispatch(decrementQty(item))}
          />
        </div>
      </div>
    </div>
  );
}
