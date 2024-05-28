import { useState } from "react";

export function useNavigation<T>(initialValue: T) {
  const [activeTab, setActiveTab] = useState<T>(initialValue);

  const getNavigationProps = (tab: T) => {
    return {
      active: activeTab === tab,
      onClick: () => setActiveTab(tab),
    };
  };

  return { getNavigationProps, activeTab };
}
