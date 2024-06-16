import clsx from "clsx";
import styles from "./eventSwitch.module.scss";

interface EventSwitchProps {
  variant: "yellow" | "blue";
  renderIcon: () => JSX.Element;
  children: React.ReactNode;
  onClick: () => void;
}

export function EventSwitch({
  variant,
  renderIcon,
  children,
  onClick,
}: EventSwitchProps) {
  const containerClasses = clsx(styles.button, { [styles[variant]]: true });

  return (
    <button className={containerClasses} type="button" onClick={onClick}>
      <div>{renderIcon()}</div>
      <div>{children}</div>
    </button>
  );
}
