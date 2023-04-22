import React from "react";
import styles from "./styles.module.css";
import logo from "assets/icons/restraunt_icon.png";
import IconButton from "components/Buttons/IconButton";
import TabPanel from "components/TabPanel";
import { useLocation, useNavigate } from "react-router-dom";
interface IProps {
  restraunt_name: string;
}
export default function Header(props: IProps) {
  const { restraunt_name } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      {pathname !== "/cart" ? (
        <>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <img className={styles.imgLogo} src={logo} alt="restraunt_logo" />
              <p className="textH2">{restraunt_name}</p>
            </div>
            <div className={styles.iconContainer}>
              <IconButton iconName="support" />
              <IconButton iconName="hash" />
            </div>
          </div>
          <div>
            <TabPanel tabs={tabs} />
          </div>
        </>
      ) : (
        <div className={styles.container2}>
          <div>
            <IconButton
              iconName="arrow-left"
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
          <div style={{ flexGrow: 1 }}>
            <p className="textH1">Place Order</p>
          </div>
          <div>
            <IconButton iconName="icon-waiter" />
          </div>
        </div>
      )}
    </div>
  );
}

const tabs = ["special", "main", "desserts", "bevarages", "food"];
