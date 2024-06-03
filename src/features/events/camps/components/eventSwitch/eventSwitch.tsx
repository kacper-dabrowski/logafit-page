import clsx from "clsx";
import styles from "./eventSwitch.module.scss";
import { ResponsiveImage } from "../../../../shared/responsiveImage/responsiveImage";

interface EventSwitchProps {
  variant: "yellow" | "blue";
  iconSrc: string;
  iconAltText: string;
  children: React.ReactNode;
  onClick: () => void;
}

export function EventSwitch({
  variant,
  iconSrc,
  children,
  iconAltText,
  onClick,
}: EventSwitchProps) {
  const containerClasses = clsx(styles.button, { [styles[variant]]: true });
  const imageClasses = clsx(styles.icon);

  return (
    <button className={containerClasses} type="button" onClick={onClick}>
      <ResponsiveImage
        src={iconSrc}
        width={{ mobile: 12, desktop: 24 }}
        height={{ mobile: 12, desktop: 24 }}
        alt={iconAltText}
        mobileClassNames={imageClasses}
        desktopClassNames={imageClasses}
      />
      <div>{children}</div>
    </button>
  );
}
