import React from "react";
import styles from "./styles.module.css";
import banner_img from "assets/images/banner.png";
import Accordion from "components/Accordion";
import VerticalCard from "components/Cards/VerticalCard";
import { specialItemsList } from "./utils";
export default function Special() {
  return (
    <div className={styles.root}>
      <div className={styles.bannerScreen}>
        <img
          src={banner_img}
          className={styles.bannerImg}
          alt="restraunt_banner"
        />
        <div className={styles.bannerText}>
          <p>Welcome to</p>
          <p>Sacred Earth Cafe</p>
        </div>
      </div>
      <Accordion title="Today’s Special">
        <div
          style={{
            display: "flex",
            gap: "0.8rem",
            flexWrap: "wrap",
            marginTop: "1.8rem",
          }}
        >
          {specialItemsList.map((e) => (
            <div style={{ flexBasis: "48%" }}>
              <VerticalCard item={e} />
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}
