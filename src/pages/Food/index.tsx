import Accordion from "components/Accordion";
import HorizontalCard from "components/Cards/HorizontalCard";
import { acaiBowlsList } from "pages/Menu/utils";
import React from "react";
import styles from "./styles.module.css";

export default function Food() {
  return (
    <div className={styles.root}>
      <Accordion title="Food">
        <div>
          {acaiBowlsList.map((e) => (
            <div style={{ flexBasis: "48%" }}>
              <HorizontalCard item={e} />
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}
