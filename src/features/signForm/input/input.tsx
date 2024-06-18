import React from "react";
import styles from "./input.module.scss";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
}

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
}

export function FormInput({ labelText, type, ...props }: FormInputProps) {
  if (type === "hidden") {
    return (
      <input name={labelText} className={styles.input} type={type} {...props} />
    );
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={labelText}>
        {labelText}
      </label>
      <input name={labelText} className={styles.input} type={type} {...props} />
    </div>
  );
}

export function FormTextarea({ labelText, ...props }: FormTextareaProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={labelText}>
        {labelText}
      </label>
      <textarea name={labelText} className={styles.input} {...props} />
    </div>
  );
}
