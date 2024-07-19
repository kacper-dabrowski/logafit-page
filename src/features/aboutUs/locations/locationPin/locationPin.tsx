import clsx from "clsx";
import styles from "./locationPin.module.scss";

export interface LocationPinProps {
  objectName: string;
  address: string;
  phoneNumbers: string;
  emailAddress?: string;
}
export function LocationPin({
  objectName,
  address,
  phoneNumbers,
  emailAddress,
}: LocationPinProps) {
  return (
    <div className={styles.container}>
      <p className={clsx(styles.text, styles.withIcon)}>{objectName}</p>
      <p className={styles.text}>{address}</p>
      <p className={styles.text}>{phoneNumbers}</p>
      {emailAddress ? <p className={styles.text}>{emailAddress}</p> : null}
    </div>
  );
}
