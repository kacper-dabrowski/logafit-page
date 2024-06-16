import React from "react";
import styles from "./input.module.scss";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}
export function FormInput({ labelText, ...props }: FormInputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={labelText}>
        {labelText}
      </label>
      <input name={labelText} className={styles.input} {...props} />
    </div>
  );
}
