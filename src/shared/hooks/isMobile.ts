import { useState, useEffect } from "react";

export enum DeviceType {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

export const useMediaQuery = (): DeviceType | null => {
  const [deviceType, setDeviceType] = useState<DeviceType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType(DeviceType.MOBILE);
      } else if (window.innerWidth < 1024) {
        setDeviceType(DeviceType.TABLET);
      } else {
        setDeviceType(DeviceType.DESKTOP);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};
