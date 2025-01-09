import clsx from "clsx";
import styles from "./locationPin.module.scss";

export interface LocationPinProps {
  list: string[];
}

export function LocationPin({ list }: LocationPinProps) {
  return (
    <div className={styles.container}>
      {list.map((item, index) => (
        <LocationElement index={index} item={item} key={item} />
      ))}
    </div>
  );
}

function LocationElement({ item, index }: { item: string; index: number }) {
  const classNames = clsx(styles.text, {
    [styles.withIcon]: index === 0,
  });

  return (
    <p key={item} className={classNames}>
      {item}
    </p>
  );
}
