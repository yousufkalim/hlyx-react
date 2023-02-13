import React from "react";
import {
  ClockIcon,
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../assets/icons/AboutTabsIcons";
import ProgressBar from "../ProgressBar";

import "../../style/components/ActiveCard.css";

const ActiveCard = ({ color = "purple" }: { color?: "green" | "purple" }) => {
  return (
    <>
      <div className="active_card_container">
        <div className="details">
          <div className="count">1</div>
          <div className="details_data">
            <h6>Raise Capital</h6>
            <p>Raise $200M in funding for R&D</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <ProgressBar color={color} value={70} />
              <p className="progress">70%</p>
            </div>
          </div>
        </div>
        <div className="active_card_footer">
          <div className="time_container">
            <ClockIcon />
            <p className="time_text">8 mo. 2 days</p>
          </div>

          <div className="icon_list">
            <div className="link_badge" data-count="5">
              <LinksIcon />
            </div>
            <div className="message_badge" data-count="3">
              <MessageIcon />
            </div>
            <ShareIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveCard;
