import { Dispatch } from "react";

export interface childrenProps {
  children?: JSX.Element;
}

export interface JobType {
  position: string;
  companyName: string;
}

export interface ImageType {
  url: string;
  altText?: string;
}

export interface CompanyLogo {
  url: string;
  altText?: string;
}

export interface TabsProps {
  tabList: string[];
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}

export interface UserInterface {
  image: ImageType;
  name: string;
  jobTitle: JobType;
  companyLogo?: ImageType;
  address: string;
}
export interface AccoladesType {
  jobTitle: JobType;
  startDate: Date;
  endDate?: Date;
}

export type ColorType = "green" | "purple" | "yellow" | "orange";

export interface ActiveAchievedType {
  color?: ColorType;
  title: string;
  description: string;
  progress: number;
  timeStamp: string;
  count?: number;
}

export interface Education {
  name: string;
  startDate: Date;
  endDate: Date;
  image: ImageType;
  program: string;
  major: string;
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
  education: Education[];
  accolades: AccoladesType[];
  Achievements: {
    year: number;
    title: string;
    description: string;
    detail?: string;
  }[];
  businessGoals: BusinessGoals;
  businessNeeds: {
    timeStamp: string;
    title: string;
    description: string;
    status: "active" | "filled";
  }[];
  Icebreaker: {
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

export interface AuthContextType {
  token?: string;
  setToken: Function;
  logout: () => void;
}
