import { grid } from "ionicons/icons";
import React from "react";
import {
  ClockIcon,
  LinksIcon,
  MessageIcon,
  ShareIcon,
} from "../../assets/icons/AboutTabsIcons";
import ProgressBar from "../ProgressBar";

const ActiveCard = () => {
  return (
    <>
      <div
        style={{
          maxWidth: 296,
          padding: "25px 15px",
          backgroundColor: "#24262B",
          borderRadius: 18,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 15,
          }}
        >
          <div
            style={{
              width: 27,
              height: 27,
              borderRadius: 8.6,
              backgroundColor: "#5200FF",
              display: "grid",
              placeItems: "center",
              fontSize: 15,
              fontWeight: 600,
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            1
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h6
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "white",
                margin: 0,
              }}
            >
              Raise Capital
            </h6>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: "#8F97A6",
                margin: 0,
              }}
            >
              Raise $200M in funding for R&D
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* <div style={{ width: 143 }}> */}
              <ProgressBar />
              <p
                style={{
                  fontSize: 12,
                  lineHeight: "16.62px",
                  fontWeight: 700,
                  color: "#8F99AE",
                }}
              >
                70%
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 19,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <ClockIcon />
            <p
              style={{
                fontSize: 12,
                lineHeight: "8px",
                fontFamily: "Poppins",
                color: "#868FA0",
                marginLeft: 6,
              }}
            >
              8 mo. 2 days
            </p>
          </div>

          <div style={{ display: "flex", gap: 9 }}>
            <LinksIcon />
            <MessageIcon />
            <ShareIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveCard;
