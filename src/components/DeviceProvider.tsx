"use client";

import { createContext, useContext, useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

type DeviceContextType = {
  deviceType: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const DeviceContext = createContext<DeviceContextType>({
  deviceType: "desktop",
  isMobile: false,
  isTablet: false,
  isDesktop: true,
});

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const tabletQuery = window.matchMedia("(min-width: 769px) and (max-width: 1024px)");

    const updateDevice = () => {
      if (mobileQuery.matches) {
        setDeviceType("mobile");
      } else if (tabletQuery.matches) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    updateDevice();

    mobileQuery.addEventListener("change", updateDevice);
    tabletQuery.addEventListener("change", updateDevice);

    return () => {
      mobileQuery.removeEventListener("change", updateDevice);
      tabletQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        deviceType,
        isMobile: deviceType === "mobile",
        isTablet: deviceType === "tablet",
        isDesktop: deviceType === "desktop",
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
