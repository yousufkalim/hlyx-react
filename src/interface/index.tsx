import { Color } from "@ionic/core";
import { IonicReactProps } from "@ionic/react/dist/types/components/IonicReactProps";
import { CSSProperties, Dispatch, PropsWithChildren } from "react";

export interface childrenProps {
  children?: JSX.Element;
}

export type AboutCardProps = PropsWithChildren & {
  icon: JSX.Element;
  cardTitle: string;
  cardTagTitle?: string;
  isTagTitle: boolean;
  style?: CSSProperties;
};

export interface ContactCardProps extends IonicReactProps {
  title: string;
  children: React.ReactNode;
}

export interface AboutTabProps extends ContactCardProps {
  button?: string;
}

export interface ServiceCardProps extends AboutTabProps {}

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

export type ColorType = "green" | "purple" | "yellow" | "orange" | "red";

export interface ActiveAchievedType {
  color?: ColorType;
  title: string;
  description: string;
  progress: number;
  timeStamp: string;
  count?: number;
}

export interface Education {
  lineColor: ColorType;
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
  loading: boolean;
  setToken: Function;
  logout: () => void;
}

export interface ProfileCardProps {
  backgroundImage: string;
  companyLogo: string;
  name: string;
  position: string;
  location: string;
  companyName?: string | undefined;
  link: string;
  id: string;
  blend?: string;
}

export interface IGalleryCard {
  img: string;
  imgAlt: string;
  title: string;
  publishDate: string;
}

export type BadgeType = "Pioneer" | "Legend" | "Leader";
export interface BadgeListProps {
  badge: BadgeType;
}

export interface ISliderCard {
  img: string;
  imgAlt: string;
  title: string;
  publishDate: string;
}
