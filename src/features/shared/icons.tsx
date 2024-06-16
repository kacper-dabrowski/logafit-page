import { PropsWithChildren } from "react";
import styles from "./icons.module.scss";

interface IconProps {
  color: string;
}

const mutualProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100%",
  height: "100%",
  viewBox: "0 0 24 24",
  fill: "none",
};

export function CalendarIcon({ color }: IconProps) {
  return (
    <IconContainer>
      <svg {...mutualProps}>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 4H5a2 2 0 0 0-2 2v3m5-5h8M8 4V2m0 2v2M3 9h18V6a2 2 0 0 0-2-2h-3M3 9v11a2 2 0 0 0 2 2h5m6-18V2m0 2v2m1 9.25V17l1.25 1.25M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
        />
      </svg>
    </IconContainer>
  );
}

export function PinIcon({ color }: IconProps) {
  return (
    <IconContainer>
      <svg {...mutualProps} color={color}>
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            d="M6.032 15.287 12 22l5.968-6.713C22.545 10.14 18.889 2 12 2 5.11 2 1.455 10.139 6.032 15.287Z"
            color="currentColor"
          />
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" color="currentColor" />
        </g>
      </svg>
    </IconContainer>
  );
}
export function UserGroupIcon({ color }: IconProps) {
  return (
    <IconContainer>
      <svg {...mutualProps} color={color}>
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4M16 3a4 4 0 0 1 0 7.75M19 15h1a2 2 0 0 1 2 2v4" />
        </g>
      </svg>
    </IconContainer>
  );
}
export function SunIcon({ color }: IconProps) {
  return (
    <IconContainer>
      <svg {...mutualProps} color={color}>
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m18 17.5 1.5 1.5m1-7h2M7 6.5 5.5 5M18 6.5 19.5 5M7 17.5 5.5 19m-3-7h2m8-10v2m0 16v2m4-10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </svg>
    </IconContainer>
  );
}

export function SnowflakeIcon({ color }: IconProps) {
  return (
    <IconContainer>
      <svg {...mutualProps} color={color}>
        <path
          stroke="#075987"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2v20M9.5 3.5 12 6l2.5-2.5m-5 17L12 18l2.5 2.5M3.34 7l17.32 10M3.39 9.915 6.804 9l-.915-3.415m12.222 12.83L17.196 15l3.415-.915m.14-7.25-17.321 10M20.7 9.75l-3.415-.915.915-3.415M5.98 18.25l.915-3.415-3.415-.915"
        />
      </svg>
    </IconContainer>
  );
}
function IconContainer({ children }: PropsWithChildren) {
  return <div className={styles.iconContainer}>{children} </div>;
}
