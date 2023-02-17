import { Dispatch } from "react";

export interface childrenProps {
  children?: JSX.Element;
}

export interface TabsProps {
  tabList: string[];
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}

export interface UserInterface {
  name: string;
  jobTitle: string;
  address: string;
}

export interface ActiveAchievedType {
  color?: "green" | "purple";
  title: string;
  description: string;
  progress: number;
  timeStamp: string;
}

export interface BusinessGoals {
  active: ActiveAchievedType[];
  achieved: ActiveAchievedType[];
  assist: {
    status: string;
    startDate: string;
    deadline: string;
    about: string;
    stats: {
      totalLinks: number;
      totalAssist: number;
      badges: number;
    };
    links: {
      imageUrl: string;
      name: string;
    }[];
    badges: string[];
    support: {
      linkCount: number;
      messageCount: number;
    };
  };
}

export interface UserContactInterface {
  email: string;
  phone: {
    number: string;
    faxNumber?: string[];
  };
  Calendar?: string;
  website: string;
  officeAddress: string;
  socialMedia?: {
    link: string;
    type: string;
  }[];
  blogLink?: {
    link: string;
    type: string;
    title: string;
    description: string;
  }[];
}

export interface UserAboutInterface {
  bio: string;
  Profession: {
    lineColor: string;
    title: string;
    description: string;
  }[];
  education: {
    name: string;
    startDate: Date;
    endDate: Date;
    image: string;
    program: string;
    major: string;
  }[];
  accolades: {
    jobTitle: string;
    startDate: Date;
    endDate?: Date;
  }[];
  Achievements: {
    year: number;
    title: string;
    description: string;
  }[];
  businessGoals: BusinessGoals;
  businessNeeds: {
    timeStamp: string;
    title: string;
    description: string;
    status: "active" | "filled";
  }[];
  Icebreakers: {
    hobbies?: string[];
    Interest?: string[];
    skills?: string[];
    Motto?: string;
  };
}

export interface UserProfile extends UserInterface {
  contact: UserContactInterface;
  about: UserAboutInterface;
}
