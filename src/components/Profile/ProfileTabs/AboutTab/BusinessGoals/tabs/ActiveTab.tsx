import React from "react";
import ActiveCard from "../../../../../ActiveCard";

const ActiveTab = () => {
  return (
    <div style={{ display: "flex", gap: 10, overflow: "auto" }}>
      <ActiveCard />
      <ActiveCard color={"green"} />
    </div>
  );
};

export default ActiveTab;
