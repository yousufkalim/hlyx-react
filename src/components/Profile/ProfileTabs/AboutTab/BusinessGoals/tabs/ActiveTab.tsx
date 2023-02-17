import React from "react";
import ActiveCard from "../../../../../ActiveCard";

const ActiveTab = () => {
  return (
    <div className="active-card-list" style={{}}>
      <ActiveCard
        title="Raise Capital"
        description="Raise $200M in funding for R&D"
        progress={70}
        timeStamp="8 mo. 2 days"
      />
      <ActiveCard
        title="Raise Capital"
        description="Raise $200M in funding for R&D"
        progress={45}
        timeStamp="8 mo. 2 days"
      />
    </div>
  );
};

export default ActiveTab;
