import clsx from "clsx";
import styles from "./locationPin.module.scss";

export interface LocationPinProps {
  objectName: string;
  address: string;
  phoneNumber: string;
  emailAddress?: string;
}
export function LocationPin({
  objectName,
  address,
  phoneNumber,
  emailAddress,
}: LocationPinProps) {
  return (
    <div className={styles.container}>
      <p className={clsx(styles.text, styles.withIcon)}>{objectName}</p>
      <p className={styles.text}>{address}</p>
      <p className={styles.text}>{phoneNumber}</p>
      {emailAddress ? <p className={styles.text}>{emailAddress}</p> : null}
    </div>
  );
}
