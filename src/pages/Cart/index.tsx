import Accordion from "components/Accordion";
import AddButton from "components/Buttons/AddButton";
import { specialItemsList } from "pages/Special/utils";
import veg_icon from "assets/icons/veg.png";
import styles from "./styles.module.css";
import { SingleItem } from "utils/types";

import { useAppDispatch, useAppSelector } from "redux/reduxHooks";
import { RootState } from "redux/store";
import { decrementQty, incrementQty } from "redux/cart.slice";

export default function Cart() {
  const { currentOrders, previousOrders } = useAppSelector(
    (state: RootState) => state.cart
  );
  return (
    <div className={styles.root}>
      <Accordion title="Current order">
        <div className={styles.itemContainer}>
          {Object.values(currentOrders).map((e) => (
            <CurrentListItemDislay item={e} />
          ))}
        </div>
      </Accordion>
      <Accordion title="Previus order">
        <div className={styles.itemContainer}>
          {Object.values(previousOrders).map((e) => (
            <PreviousListDisplay item={e} />
          ))}
        </div>
      </Accordion>
    </div>
  );
}

interface IListDisplayProps {
  item: SingleItem;
}
function CurrentListItemDislay(props: IListDisplayProps) {
  const { item } = props;
  const { currentOrders } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.item}>
      <div>
        <img className={styles.vegIcon} src={veg_icon} alt="veg_icon" />
      </div>
      <div className={styles.nameContainer}>
        <p className="textBody2">{item.name}</p>
        <p className="textBody4">₹{item.price}</p>
      </div>
      <div>
        <AddButton
          quantity={currentOrders[item.id] ? currentOrders[item.id].qty : 0}
          onAdd={() => dispatch(incrementQty(item))}
          onRemove={() => dispatch(decrementQty(item))}
        />
      </div>
    </div>
  );
}

function PreviousListDisplay(props: IListDisplayProps) {
  const { item } = props;
  const { previousOrders } = useAppSelector((state: RootState) => state.cart);
  return (
    <div className={styles.item}>
      <div>
        <img className={styles.vegIcon} src={veg_icon} alt="veg_icon" />
      </div>
      <div className={styles.nameContainer}>
        <p className="textBody2">{item.name}</p>
        <p className="textBody4">₹{item.price}</p>
      </div>
      <div>{previousOrders[item.id] ? previousOrders[item.id].qty : 0}</div>
    </div>
  );
}
