import clsx from "clsx";
import styles from "./button.module.scss";

interface ButtonProps extends React.PropsWithChildren {
  active?: boolean;
  variant: "green" | "blue" | "lime";
}

export function OfferButton({ children, active, variant }: ButtonProps) {
  const classes = clsx(styles.button, {
    [styles.active]: active,
    [styles[`${variant}Variant`]]: true,
  });

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
