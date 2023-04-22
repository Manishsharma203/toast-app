import Accordion from "components/Accordion";
import HorizontalCard from "components/Cards/HorizontalCard";
import React from "react";
import styles from "./styles.module.css";
import { acaiBowlsList } from "./utils";

export default function Menu() {
  return (
    <div className={styles.root}>
      <Accordion title="Acai Bowls">
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
