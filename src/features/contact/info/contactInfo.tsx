import { CompanyData } from "../../contentful/companyData/companyData.transformer";
import styles from "./contactInfo.module.scss";

interface ContactInfoProps {
  companyDataList: CompanyData[];
}

export function ContactInfo({ companyDataList }: ContactInfoProps) {
  return (
    <div className={styles.container}>
      {companyDataList.map((companyData) => (
        <div key={companyData.companyName} className={styles.wrapper}>
          <p className={styles.text}>{companyData.companyName}</p>
          <p className={styles.text}>{companyData.nameAndSurname}</p>
          <p className={styles.text}>{companyData.address}</p>
          <p className={styles.text}>{companyData.nipNumber}</p>
          <p className={styles.text}>{companyData.bankName}</p>
          <p className={styles.text}>{companyData.bankAccountNumber}</p>
        </div>
      ))}
    </div>
  );
}
