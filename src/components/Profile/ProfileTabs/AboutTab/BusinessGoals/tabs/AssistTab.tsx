import React, { useContext } from "react";
import { IonAvatar, IonButton, IonLabel } from "@ionic/react";
import { MoreOptions, Plus } from "../../../../../../assets/icons";
import "../../../../../../style/components/assistTab.css";
import Pioneer from "../../../../../../assets/icons/silver_medal.svg";
import Legend from "../../../../../../assets/icons/grandprix_trophy.svg";
import Leader from "../../../../../../assets/icons/gold_medal.svg";
import {
  LinksIcon,
  ShareIcon,
  MessageIcon,
} from "../../../../../../assets/icons/AboutTabsIcons";
import { ProfileContext } from "../../../../../../context/profileContext";

export const assistListData = [
  {
    title: "Status",
    description: "Goal achieved!",
  },
  {
    title: "Start",
    description: "Apr. 8, 2022",
  },
  {
    title: "Deadline",
    description: "Dec. 31, 2022",
  },
  {
    title: "Deadline",
    description: "Dec. 21, 2023",
  },
];

interface BadgeListProps {
  badge: BadgeType;
}

type BadgeType = "Pioneer" | "Legend" | "Leader";

const UserBadges: BadgeType[] = ["Pioneer", "Leader", "Legend"];

const badges = {
  Pioneer: Pioneer,
  Legend: Legend,
  Leader: Leader,
};
const BadgeList = ({ badge }: BadgeListProps) => {
  return (
    <div className="badge-data">
      <img src={badges[badge]} alt="" />
      <p>{badge}</p>
    </div>
  );
};

const StatList = ({
  digit = 0,
  description,
}: {
  digit?: number;
  description: string;
}) => {
  return (
    <div className="stat-data">
      <h1>{digit}</h1>
      <p>{description}</p>
    </div>
  );
};

const AssistCardSections = ({
  title,
  children,
  lineColor,
}: {
  title: string;
  children: React.ReactNode;
  lineColor: string;
}) => {
  return (
    <div className="assist-list-card-container">
      <div className="assist-list-card-title">
        <div className={`assist-line assist-line-${lineColor}`} />
        <IonLabel className="assist-list-card-heading">{title}</IonLabel>
      </div>
      <div className="children">{children}</div>
    </div>
  );
};

const AssistTab = () => {
  const { userProfile } = useContext(ProfileContext);
  const { assist } = userProfile?.about?.businessGoal ?? [];
  const { status, startDate, deadline, links } = assist;
  const { name, imageUrl } = assist?.links ?? [];

  return (
    <div className="assist_card_container">
      <div className="assist-header">
        <div className="more_options">
          <MoreOptions />
        </div>
        <div className="color_line" />
        <div className="assist_details_container">
          <div className="assist_details">
            <h6>Create DNA Nano-Map</h6>
            <p>Create DNA nano-map sequencing</p>
          </div>
        </div>
      </div>
      <div className="assist-list">
        <div className="assist-item">
          <p className="assist-title">Status</p>
          <p className="assist-description">{status}</p>
        </div>
        <div className="assist-item">
          <p className="assist-title">Start</p>
          <p className="assist-description">{startDate}</p>
        </div>
        <div className="assist-item">
          <p className="assist-title">Deadline</p>
          <p className="assist-description">{deadline}</p>
        </div>
      </div>
      <div className="detail-list">
        <AssistCardSections title="Activity" lineColor="blue">
          <div className="stat">
            <StatList digit={95} description="Total Links" />
            <StatList digit={101} description="Total Assists" />
            <StatList digit={3} description="Badges" />
          </div>  
        </AssistCardSections>

        <AssistCardSections title="Links" lineColor="green">
          <div className="assist_avatar">
            {links.map(({imageUrl,name}:any,index:number) => (
              <div className="ionAvatar_container">
                <IonAvatar className="ion_avatar"><img src={imageUrl}/></IonAvatar>
                <IonLabel className="ionlabel">{name}</IonLabel>
              </div>
            ))}
          </div>
        </AssistCardSections>
        <AssistCardSections title="Badges" lineColor="yellow">
          <div className="badge-list">
            {UserBadges?.map((badge, index) => (
              <BadgeList badge={badge} />
            ))}
          </div>
        </AssistCardSections>
        {/* <AssistCardSections title="Support" lineColor="red">
          <div className="Support-icons">
            <div className="support-link-badge" data-count="95">
              <LinksIcon />
            </div>
            <div className="support-message-badge" data-count="101">
              <MessageIcon />
            </div>
            <ShareIcon />
            <IonButton className="Assist-Button" shape="round" size="default">
              {<Plus />}Support
            </IonButton>
          </div>
        </AssistCardSections> */}
      </div>
    </div>
  );
};

export default AssistTab;
