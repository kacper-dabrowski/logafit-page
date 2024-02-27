import clsx from "clsx";
import styles from "./button.module.scss";

interface ButtonProps extends React.PropsWithChildren {
  active?: boolean;
}

export function OfferButton({ children, active }: ButtonProps) {
  const classes = clsx(styles.button, { [styles.active]: active });

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
