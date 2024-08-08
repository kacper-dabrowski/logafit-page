import styles from "./contactInfo.module.scss";

export function ContactInfo() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <p className={styles.text}>Logafit Centrum Zdrowia i Fitnessu</p>
          <p className={styles.text}>Aleksandra Lorenc - Gawrych</p>
          <p className={styles.text}>Okonin 63; 86-330 Mełno</p>
          <p className={styles.text}>NIP: 876 223 52 50</p>
          <p className={styles.text}>PKO</p>
          <p className={styles.text}>15 1020 5040 0000 6602 0259 5999</p>
        </div>
      </div>
      <div>
        <div>
          <p className={styles.text}>Logafit</p>
          <p className={styles.text}>Przemysław Gawrych</p>
          <p className={styles.text}>Okonin 63; 86-330 Mełno</p>
          <p className={styles.text}>NIP: 779 204 39 50</p>
          <p className={styles.text}>mBank</p>
          <p className={styles.text}>20 1140 2004 0000 3002 7283 2873</p>
        </div>
      </div>
      <div />
    </div>
  );
}
