import clsx from "clsx";
import Image from "next/image";
import styles from "./eventSwitch.module.scss";

interface EventSwitchProps {
  variant: "yellow" | "purple";
  iconSrc: string;
  iconAltText: string;
  children: React.ReactNode;
}

export function EventSwitch({
  variant,
  iconSrc,
  children,
  iconAltText,
}: EventSwitchProps) {
  const classes = clsx(styles.button, { [styles[variant]]: true });

  return (
    <button className={classes} type="button">
      <Image src={iconSrc} width={24} height={24} alt={iconAltText} />
      {children}
    </button>
  );
}
