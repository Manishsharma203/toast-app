import React from "react";
import { NavLink } from "react-router-dom";
interface TabPanelProps {
  tabs: string[];
}
export default function TabPanel(props: TabPanelProps) {
  // const [activeTab, setActiveTab] = useState(0);
  return (
    <div
      style={{
        overflowX: "auto",
        padding: "1rem 0px",
      }}
    >
      <div>
        {props.tabs.map((child, index) => (
          <NavLink
            to={child}
            className={({ isActive, isPending }) =>
              isPending
                ? "tab pending_nav"
                : isActive
                ? "tab active_nav"
                : "tab"
            }
          >
            {child.toUpperCase()}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
