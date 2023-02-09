import { Dispatch } from "react";

export interface TabsProps {
  tabList: string[];
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}
