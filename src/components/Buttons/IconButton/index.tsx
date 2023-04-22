import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  iconName: string;
  qty?: number | undefined;
}
export default function IconButton(props: IProps) {
  return (
    <button {...props} className={styles.root}>
      <img
        className={styles.btnImg}
        src={require(`assets/icons/${props.iconName}.png`)}
        alt={`${props.iconName}_logo`}
      />
      {props.iconName === "cart" && props.qty && props.qty > 0 && (
        <div className={styles.numIcon}>{props.qty}</div>
      )}
    </button>
  );
}
