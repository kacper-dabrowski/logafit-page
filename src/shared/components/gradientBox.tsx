import clsx from "clsx";
import styles from "./gradientBox.module.scss";

interface GradientBoxProps {
  variant: "green" | "blue" | "purple";
}

export function GradientBox({
  children,
  variant,
}: React.PropsWithChildren<GradientBoxProps>) {
  const classes = clsx(styles.box, styles[`${variant}Variant`]);

  return <div className={classes}>{children}</div>;
}
