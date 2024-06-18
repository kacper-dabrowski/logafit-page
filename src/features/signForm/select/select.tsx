import styles from "./select.module.scss";

interface FormSelectProps {
  options: string[];
  labelText: string;
  required?: boolean;
}

export function FormSelect({ options, labelText, required }: FormSelectProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={labelText}>
        {labelText}
      </label>
      <select required={required} className={styles.select} name={labelText}>
        {options.map((singleOption) => (
          <option key={singleOption} value={singleOption}>
            {singleOption}
          </option>
        ))}
      </select>
    </div>
  );
}
