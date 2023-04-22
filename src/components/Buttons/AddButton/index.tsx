import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";
import plus from "assets/icons/plus.png";
import minus from "assets/icons/minus.png";

interface IProps {
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}
export default function AddButton(props: IProps) {
  const { quantity, onAdd, onRemove } = props;
  return (
    <div className={styles.root}>
      {quantity === 0 ? (
        <button className={styles.addBtn} onClick={onAdd}>
          <div className={styles.circularBtn}>
            <img src={plus} alt="plus" />
          </div>
          <p className="textBody3">ADD</p>
        </button>
      ) : (
        <div className={styles.addBtn}>
          <button className={styles.circularBtn} onClick={onRemove}>
            <img src={minus} alt="minus " />
          </button>
          <span className="textBody3">{quantity}</span>
          <button className={styles.circularBtn} onClick={onAdd}>
            <img src={plus} alt="plus" />
          </button>
        </div>
      )}
    </div>
  );
}
