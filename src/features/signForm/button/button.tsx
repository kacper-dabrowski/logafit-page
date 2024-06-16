import styles from "./button.module.scss";

interface FormButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function FormButton({ onClick }: FormButtonProps) {
  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      Potwierdź rejestrację
    </button>
  );
}
