import React, { useState } from "react";
import styles from "./styles.module.css";

interface IProps {
  title: string;
  children: React.ReactNode;
}
export default function Accordion(props: IProps) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleAccordionClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.root}>
      <div className={styles.accordion}>
        <p className="textBody2">{title}</p>
        <div className={styles.line}></div>
        <button
          onClick={handleAccordionClick}
          className={isOpen ? styles.triangleBtnDown : styles.triangleBtnUp}
        ></button>
      </div>
      {isOpen && <div className={styles.container}>{children}</div>}
    </div>
  );
}
