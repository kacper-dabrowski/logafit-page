import { PropsWithChildren } from "react";
import styles from "./signForm.module.scss";

interface SignFormProps extends PropsWithChildren {}

export function SignForm({ children }: SignFormProps) {
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        method="POST"
        action="https://submit-form.com/hf6EMLT5W"
      >
        {children}
      </form>
    </div>
  );
}
