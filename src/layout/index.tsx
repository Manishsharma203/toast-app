import Footer from "components/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styles from "./styles.module.css";

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.header}>
        <Header restraunt_name="Sacred Earth Cafe" />
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
