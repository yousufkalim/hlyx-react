// Background Images
import JamesBackground from "../assets/JamesR.png";
import DoctorBackground from "../assets/physician_male_01.png";
import JamesHlyxBackground from "../assets/JamesHlyx.png";
import JoeICalvilloBackground from "../assets/JoeICalvillo.png";
// Cover Images
import JamesCover from "../assets/media/JamesCover.png";
import DoctorCover from "../assets/media/media-image.png";
import JamesHlyxCover from "../assets/media/JamesHlyxCover.png";
import JoeICalvilloCover from "../assets/media/JoeICalvilloCover.png";
// Company Logos
import JoeICompany from "../assets/JoeICompany.png";
import Oriyn from "../assets/Oriyn.png";
import Sphere from "../assets/sphere.png";
import Hylx from "../assets/Hylx.png";
// University Logos
import SanJose from "../assets//SanJose.png";
import DeAnzaCollege from "../assets//DeAnzaCollege.png";
import SaintFrancis from "../assets/SaintFrancis.png";
import Stanfard from "../assets/stanfard.png";

// Avatars
import BlakeB from "../assets/BlakeB.png";
import JamesC from "../assets/JamesC.png";
import JordanR from "../assets/JordanR.png";
import LenaX from "../assets/LenaX.png";
import NinaM from "../assets/NinaM.png";
import TallikaP from "../assets/TallikaP.png";
import TinaM from "../assets/TinaM.png";

export const userData = [
  // James Oriyan Profile
  {
    blend: "james",
    backgroundImage: {
      url: JamesBackground,
      altText: "User Background Picture",
    },
    name: "James R. Beckley",
    companyLogo: {
      url: Oriyn,
      altText: "Company Logo",
    },
    jobTitle: {
      position: "CEO",
      companyName: " Oriyn",
    },
    address: "San Diego, CA",
    image: {
      url: JamesCover,
      altText: "user Picture",
    },
    contact: {
      name: "James R. Beckley",
      jobTitle: {
        position: "CEO",
        companyName: " Oriyn",
      },
      address: "San Diego, CA",
      email: "jrbeckley@oriyn.com",
      phone: {
        number: "+1 (408) 420-9617",
        faxNumber: ["+1 (888) 796-7496   Ext 700", "+1 (650) 308-8890"],
      },
      calendar: "Setmore > James R. Beckley",
      website: "www.oriyn.com",
      officeAddress:
        "8910 University Center Lane, Suite 400, San Diego, CA 92122",
      socialMedia: [
        {
          link: "https://linkedin.com/in/jamesrbeckley",
          label: "LinkedIn",
        },
        {
          link: "https://twitter.com/jamesrbeckley",
          label: "Twitter",
        },
        {
          link: "https://oriyn-workspace.slack.com/archives/D0417NGS8G5",
          label: "Slack",
        },
        {
          link: "https://www.medium.com/@jamesrbeckley",
          label: "Medium",
        },
        {
          link: "https://www.youtube.com/oriynapps",
          label: "YouTube",
        },
        {
          link: "https://www.instagram.com/weareoriyn",
          label: "Instagram",
        },
        {
          link: "https://www.youtube.com/",
          label: "Behance",
        },
        {
          link: " https://www.skype.com/en/@oriynapps",
          label: "Skype",
        },
      ],
      blogLink: [
        {
          link: "https://medium.com/",
          type: "Medium",
          title:
            "How Automation Technology Can Increase Efficiency And Revenue",
          description: "Access Article on Medium",
        },
        {
          link: "https://soundcloud.com/",
          type: "GoogleDrive",
          title:
            "The Future of Business Technology And How Oriyn Is Planning Ahead",
          description: "Access Audio on SoundCloud",
        },
        {
          link: "https://www.google.com/drive/",
          type: "SoundCloud",
          title: "Oriyn Business Solutions Deck 2023",
          description: "Access File on Google Drive",
        },
      ],
    },

    about: {
      bio: "I have dedicated the last 24 years of my career to building technology solutions that have impacted the businesses of startup founders, small business owners, and established enterprise brands. I started my first company at the age of 16, creating custom...",
      profession: [
        {
          lineColor: "blue",
          title: "Company",
          description: "Oriyn LLC",
        },
        {
          lineColor: "green",
          title: "Title / Role",
          description: "Chief Executive Officer",
        },
        {
          lineColor: "purple",
          title: "Occupation / Profession",
          description: "Entrepreneur / Founder / Product Designer",
        },
        {
          lineColor: "orange",
          title: "Industry",
          description: "Information Technology",
        },
      ],
      education: [
        {
          lineColor: "yellow",
          name: "San Jose State",
          startDate: "2005",
          endDate: "2008",
          image: {
            url: SanJose,
            altText: "San Jose State",
          },
          major: "Studied Business Finance",
          program: "Business Administration",
        },
        {
          lineColor: "red",
          name: "De Anza College",
          startDate: "2001",
          endDate: "2005",
          image: {
            url: DeAnzaCollege,
            altText: "De Anza College",
          },
          major: "Studied CIS & Bus. Management",
          program: "Associate Arts",
        },
      ],
      accolades: [
        {
          jobTitle: {
            position: "Founder & CEO  ",
            companyName: " HLYX Inc.",
          },
          startDate: "December 2022 ",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "Founder & CEO  ",
            companyName: " Oriyn LLC",
          },
          startDate: "June 2018",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "President & Managing Partner  ",
            companyName: " Kiyah Partners",
          },
          startDate: "July 2022  ",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "Founder and Executive Director  ",
            companyName: "SCELF",
          },
          startDate: "August 2009 ",
          endDate: "January 2015",
        },
      ],
      achievement: [
        {
          title: "2023",
          descriptiontitle: "Created a platform to empower founders",
          description:
            "Founded and built a first of its kind Business Empowerment Platform designed to optimize the success of entrepreneurs and brands by leveraging the power of their networks to help business owners focus on building quality relationships and creating opportunities that thrive.",
        },
        {
          title: "2022",
          descriptiontitle: "1300 completed projects",
          description:
            "As of present date, I have successfully completed 1300 career projects encompassing graphic design, branding, BI dashboard reports, market research, web and mobile product design and custom software  development from 2009 to present.",
        },
        {
          title: "2018 - Present",
          descriptiontitle: "150 clients and counting",
          description:
            " Founded, bootstrapped and grew Oriyn from 0 to 150 clients and counting. Through Oriyn, I’ve worked with and helped startup founders, small business owners, to established enterprise clients design and execute technical strategies that return results, and created custom digital solutions that solve real-world challenges.",
        },
        {
          title: "2009 - 2015",
          descriptiontitle:
            " Created a non-profit dedicated to finding cures for hematologic disorders",
          description:
            "Created a non-profit dedicated to finding cures for hematologic disorders Having personally experienced the loss of close family members who suffered from blood disorders that left them debilitated and in pain until the very end, I founded SCELF Org in 2009 to raise awareness and provide educational resources about hematologic disorders like SCD and Leukemia. Through the organization, we hosted several public events, built a donation website, and an interactive portal with real patient video testimonials. During the course of SCELF, we achieved total donated contributions of $20K and serviced over 1200 online Facebook group members. ",
        },
      ],
      businessGoal: {
        active: [
          {
            title: "Raise Capital",
            description: "Raise $3-5M for new investment",
            progress: 70,
            timeStamp: "8 mo. 2 days",
          },
          {
            title: "Acquire Property Portfolio",
            description: "Acquire 10 new portfolio properties",
            progress: 18,
            timeStamp: "65 days",
          },
          {
            title: "Develop Retail Center",
            description: "Begin construction on retail center",
            progress: 60,
            timeStamp: "4 wk. 3 days",
          },
        ],
        achieved: [
          {
            title: "Design New Oriyn Website",
            description: "Complete the UI/UX website screens",
            timeStamp: "Feb. 17, 2023",
            progress: 100,
          },
          {
            title: "Launch Oriyn’s 2023 Marketing Plan",
            description:
              "Begin creating materials for Oriyn’s marketing plan for 2023",
            timeStamp: "Jan. 8, 2022",
            progress: 100,
          },
          {
            title: "Design & Deploy BI Division",
            description: "Launch Oriyn’s BI Services Division",
            timeStamp: "Dec. 19, 2022",
            progress: 100,
          },
        ],
        assist: {
          status: "Goal achieved!",
          startDate: "Sep. 15, 2023",
          deadline: "Mar. 31, 2023",
          about:
            "Community Volunteer, Redhead, Friends of Animals, Water Protector, King of Lies. I like pop-up books.",
          stats: {
            totalLinks: 95,
            totalAssist: 101,
            badges: 3,
          },
          links: [
            {
              imageUrl: BlakeB,
              name: "Blake B.",
            },
            {
              imageUrl: LenaX,
              name: "Lena X.",
            },
            {
              imageUrl: NinaM,
              name: "Nina M.",
            },
            {
              imageUrl: TallikaP,
              name: "Tallia P.",
            },
            {
              imageUrl: JordanR,
              name: "Jordan R.",
            },
            {
              imageUrl: JamesC,
              name: "James C.",
            },
            {
              imageUrl: TinaM,
              name: "Tina M.",
            },
          ],

          badge: ["Pioneer", "Leader", "Legend"],
          support: {
            linkCount: 95,
            messageCount: 101,
          },
        },
      },
      businessNeeds: [
        {
          timeStamp: "January 1, 2023",
          title: "Experienced CTO",
          status: "Active",
          description:
            "Looking for an experienced CTO to fill partnership position and lead product team",
        },
        {
          timeStamp: "December 11, 2022",
          title: "Funding Advisor",
          status: "Active",
          description:
            "Looking for an experienced fundraising advisor with experience in SAFE notes and seed rounds",
        },
        {
          timeStamp: "November 8, 2022",
          title: "React Native Developer",
          status: "Filled",
          description:
            "Looking for a skilled React Native developer to join our DevOps product team",
        },
      ],
      icebreakers: {
        hobbies: ["Martial Arts", "Stargazing", "Art"],
        interest: ["Reading", "Legos", "Music"],
        skills: ["Painting", "Piano", "Gardening"],
        motto: "Science is an oyster, serve it up tastefully.",
      },
    },
    service: {
      featuredServices: [
        {
          lineColor: "yellow",
          title: "Market Research & BI ",
          description:
            "We help startup founders and SMB’s with quality market research into any vertical",
        },
        {
          lineColor: "green",
          title: "Product Development ",
          description:
            "We provide modern UI/UX Product Design and full-service software development",
        },
        {
          lineColor: "purple",
          title: "Venture Lab ",
          description:
            "R&D Arm dedicated to the development of innovative new digital technology ventures",
        },
      ],
      mainServices: [
        {
          type: "BiDashboard",
          title: "BI Dashboard Report",
        },
        {
          type: "DataMarketing",
          title: "Data & Market Research",
        },
        {
          type: "UiUx",
          title: "Product UI/UX Design",
        },
        {
          type: "Devolpment",
          title: "Software Development",
        },
      ],
    },
  },
  // Doctor Profile
  {
    backgroundImage: {
      url: DoctorBackground,
      altText: "User Background picture",
    },
    name: "Dr. Kenji Awurama",
    companyLogo: {
      url: Sphere,
      altText: "Company Logo",
    },
    jobTitle: {
      position: "Executive Director",
      companyName: "Sphere Bio Tech",
    },
    address: "Palo Alto, California",
    image: {
      url: DoctorCover,
      altText: "user Picture",
    },
    contact: {
      name: "Dr. Kenji Awurama",
      jobTitle: {
        position: "Executive Director",
        companyName: "Sphere Bio Tech",
      },
      address: "Palo Alto, California",
      email: "kenji.awurama@sperebio.tech",
      phone: {
        number: "+1 (650) 345-6789 Ext 700",
        faxNumber: ["+1 (650) 345-6789"],
      },
      calendar: "Calendly > Kenji Awurama",
      website: "www.sperebio.tech",
      officeAddress: "1886 Globe Trotter Court Palo Alto, CA 95051",
      socialMedia: [
        {
          link: "https://www.youtube.com/",
          label: "YouTube",
        },
        {
          link: "https://www.youtube.com/",
          label: "Slack",
        },
        {
          link: "https://www.youtube.com/",
          label: "Reddit",
        },
        {
          link: "https://www.youtube.com/",
          label: "Discord",
        },
        {
          link: "https://www.youtube.com/",
          label: "Twitter",
        },
        {
          link: "https://www.youtube.com/",
          label: "Facebook",
        },
        {
          link: "https://www.youtube.com/",
          label: "Behance",
        },
        {
          link: "https://www.youtube.com/",
          label: "Skype",
        },
        {
          link: "https://www.youtube.com/",
          label: "Instagram",
        },
        {
          link: "https://www.youtube.com/",
          label: "Medium",
        },
        {
          link: "https://linkedin.com/in/jamesrbeckley",
          label: "LinkedIn",
        },
      ],
      blogLink: [
        {
          link: "https://medium.com/",
          type: "Medium",
          title:
            "Sphere Bio Technologies Unveils Breakthrough Science That Regenerates Necrotic Cells",
          description: "Access Article on Medium",
        },
        {
          link: "https://www.google.com/drive/",
          type: "GoogleDrive",
          title: "Cellular Science Chat With Kenji Awurama",
          description: "Access Audio on SoundCloud",
        },
        {
          link: "https://soundcloud.com/",
          type: "SoundCloud",
          title: "Sphere Bio Customer Spec Sheet",
          description: "Access File on Google Drive",
        },
      ],
    },

    about: {
      bio: "In the span of 24 years, I have dedicated my career to building technology solutions that have impacted the businesses of startup founders, small business owners, and established enterprise brands. I started my first company at the age of 16, creating custom...",
      profession: [
        {
          lineColor: "blue",
          title: "Company",
          description: "Sphere Bio Technologies, Inc.",
        },
        {
          lineColor: "green",
          title: "Title / Role",
          description: "Executive Director",
        },
        {
          lineColor: "purple",
          title: "Occupation / Profession",
          description: "Molecular Scientist, PHD",
        },
        {
          lineColor: "orange",
          title: "Industry",
          description: "Life Sciences, Bio-Engineering",
        },
      ],
      education: [
        {
          name: "San Jose State",
          startDate: "2005",
          endDate: "2009",
          image: {
            url: Stanfard,
            altText: "San Jose",
          },
          major: "Studied Molecular Biology",
          program: "Masters Degree",
        },
        {
          name: "University San Diego",
          startDate: "Class of 1996",
          major: "Biology, Electives, STEM",
          program: "Diploma",
        },
      ],
      accolades: [
        {
          jobTitle: {
            position: "Board Chair  ",
            companyName: " Boston Medical",
          },
          startDate: "November 1, 2022 ",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "Deans List 4 Years in a row ",
            companyName: " Stanford University",
          },
          startDate: "August 2017",
          endDate: "May 2022 ",
        },
        {
          jobTitle: {
            position: "Summa Cum Laude, Honors Club  ",
            companyName: "Stanford University",
          },
          startDate: "August 2017",
          endDate: "May 2022  ",
        },
      ],
      achievement: [
        {
          title: "2023",
          description: "People Magazine Scientist of The Year",
        },
        {
          title: "2022",
          description: "Harvard Medical Journal Prestigious Honor Recipient",
        },
        {
          title: "2021",
          description: "Presidential Honorin Genetic Science",
        },
      ],
      businessGoal: {
        active: [
          {
            title: "Raise Capital",
            description: "Raise $3-5M for new investment",
            progress: 70,
            timeStamp: "8 mo. 2 days",
          },
          {
            title: "Acquire Property Portfolio",
            description: "Acquire 10 new portfolio properties",
            progress: 18,
            timeStamp: "65 days",
          },
          {
            title: "Develop Retail Center",
            description: "Begin construction on retail center",
            progress: 60,
            timeStamp: "4 wk. 3 days",
          },
        ],
        achieved: [
          {
            title: "Create DNA Nano Map",
            description: "Create DNA nano-map sequencing",
            timeStamp: "Nov. 1, 2022",
            progress: 100,
          },
          {
            title: "Compete AMT Certification",
            description: "Get AMT Certification by end of year",
            timeStamp: "Oct. 8, 2022",
            progress: 100,
          },
          {
            title: "Acquire New Business Office",
            description: "Close on new office location for 2022",
            timeStamp: "Sep. 1, 2022",
            progress: 100,
          },
        ],
        assist: {
          status: "Goal achieved!",
          startDate: "Apr. 8, 2022",
          deadline: "Dec. 31, 2022",
          about:
            "Community Volunteer, Redhead, Friends of Animals, Water Protector, King of Lies. I like pop-up books.",
          stats: {
            totalLinks: 95,
            totalAssist: 101,
            badges: 3,
          },
          links: [
            {
              imageUrl: BlakeB,
              name: "Blake B.",
            },
            {
              imageUrl: LenaX,
              name: "Lena X.",
            },
            {
              imageUrl: NinaM,
              name: "Nina M.",
            },
            {
              imageUrl: TallikaP,
              name: "Tallia P.",
            },
            {
              imageUrl: JordanR,
              name: "Jordan R.",
            },
            {
              imageUrl: JamesC,
              name: "James C.",
            },
            {
              imageUrl: TinaM,
              name: "Tina M.",
            },
          ],

          badge: ["Pioneer", "Leader", "Legend"],
          support: {
            linkCount: 95,
            messageCount: 101,
          },
        },
      },
      businessNeeds: [
        {
          timeStamp: "January 28, 2000",
          title: "New Company Website",
          status: "Active",
          description:
            "Looking for someone that can create a new company website for us",
        },
        {
          timeStamp: "December 11, 2022",
          title: "Find Business Partner",
          status: "Active",
          description:
            "Looking for business partner that has experience building bio-tech companies",
        },
        {
          timeStamp: "November 8, 2022",
          title: "Seeking Experienced Scientist",
          status: "Filled",
          description:
            "Looking for someone that can create a new company website for us",
        },
      ],
      icebreakers: {
        hobbies: ["Martial Arts", "Stargazing", "Art"],
        interest: ["Reading", "Legos", "Music"],
        skills: ["Painting", "Piano", "Gardening"],
        motto: "Science is an oyster, serve it up tastefully.",
      },
    },
    service: {
      featuredServices: [
        {
          title: "Market Research & BI ",
          description:
            "We help startup founders and SMB’s with quality market research into any vertical",
        },
        {
          title: "Market Research & BI ",
          description:
            "We help startup founders and SMB’s with quality market research into any vertical",
        },
      ],
      mainServices: [
        {
          type: "BiDashboard",
          title: "BI Dashboard Report",
        },
        {
          type: "DataMarketing",
          title: "Data & Market Research",
        },
        {
          type: "UiUx",
          title: "Product UI/UX Design",
        },
        {
          type: "Devolpment",
          title: "Software Development",
        },
      ],
    },
  },
  // James Hlyx Profile
  {
    blend: "hlyx",
    backgroundImage: {
      url: JamesHlyxBackground,
      altText: "User Background Picture",
    },
    id: "james-hlyx",
    name: "JamesR. Beckley",
    companyLogo: {
      url: Hylx,
      altText: "Company Logo",
    },
    jobTitle: {
      position: "CEO at",
      companyName: " HLYX Inc.",
    },
    address: "San Diego, CA",
    image: {
      url: JamesHlyxCover,
      altText: "user Picture",
    },
    contact: {
      name: "JamesR. Beckley",
      jobTitle: {
        position: "CEO",
        companyName: " Oriyn",
      },
      address: "San Diego, CA",
      email: "james.beckley@hlyx.io",
      phone: {
        number: "+1 (408) 420-9617",
        faxNumber: ["+1 (408) 420-9617   Ext 700", "+1 (408) 420-9617"],
      },
      calendar: "Setmore > James R. Beckley",
      website: "www.hlyx.io",
      officeAddress:
        "8910 University Center Lane, Suite 400, San Diego, CA 92122",
      socialMedia: [
        {
          link: "https://www.youtube.com/",
          label: "YouTube",
        },
        {
          link: "https://www.youtube.com/",
          label: "Slack",
        },
        {
          link: "https://www.youtube.com/",
          label: "Reddit",
        },
        {
          link: "https://www.youtube.com/",
          label: "Discord",
        },
        {
          link: "https://twitter.com/jamesrbeckley",
          label: "Twitter",
        },
        {
          link: "https://www.youtube.com/",
          label: "Facebook",
        },
        {
          link: "https://www.youtube.com/",
          label: "Behance",
        },
        {
          link: "https://www.youtube.com/",
          label: "Skype",
        },
        {
          link: "https://www.youtube.com/",
          label: "Instagram",
        },
        {
          link: "https://www.youtube.com/",
          label: "Medium",
        },
        {
          link: "https://linkedin.com/in/jamesrbeckley",
          label: "LinkedIn",
        },
      ],
      blogLink: [
        {
          link: "https://medium.com/",
          type: "Medium",
          title: "The importance of building strong business relationships",
          description: "Access Article on Medium",
        },
        {
          link: "https://www.google.com/drive/",
          type: "GoogleDrive",
          title: "HLYX Company Slide Deck",
          description: "Access Audio on SoundCloud",
        },
        {
          link: "https://soundcloud.com/",
          type: "SoundCloud",
          title:
            "The Future of Business Networking With James R. Beckley of HLYX ",
          description: "Access File on Google Drive",
        },
      ],
    },

    about: {
      bio: "Hello, I’m James R. Beckley, the founder and creator of HLYX. My team and created HLYX with the principal mission of empowering first time entrepreneurs, small business owners, to established brands to come together and build...",
      profession: [
        {
          lineColor: "blue",
          title: "Company",
          description: "HLYX Inc.",
        },
        {
          lineColor: "green",
          title: "Title / Role",
          description: "Chief Executive Officer",
        },
        {
          lineColor: "purple",
          title: "Occupation / Profession",
          description: "Entrepreneur / Founder",
        },
        {
          lineColor: "orange",
          title: "Industry",
          description: "Information Technology",
        },
      ],
      education: [
        {
          name: "San Jose State",
          startDate: "2005",
          endDate: "2008",
          image: {
            url: SanJose,
            altText: "San Jose State",
          },
          major: "Studied Business Finance",
          program: "Business Administration",
        },
        {
          name: "De Anza College",
          startDate: "2001",
          endDate: "2005",
          // image: {
          //   url: DeAnzaCollege,
          //   altText: "De Anza College",
          // },image: {
          //   url: DeAnzaCollege,
          //   altText: "De Anza College",
          // },
          major: "Studied CIS & Bus. Management",
          program: "Associate Arts",
        },
      ],
      accolades: [
        {
          jobTitle: {
            position: "Founder & CEO  ",
            companyName: " HLYX Inc.",
          },
          startDate: "December 2022 ",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "Founder & CEO  ",
            companyName: " Oriyn LLC",
          },
          startDate: "June 2018",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "President & Managing Partner  ",
            companyName: " Kiyah Partners",
          },
          startDate: "July 2022  ",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "Founder and Executive Director  ",
            companyName: "SCELF",
          },
          startDate: "August 2009 ",
          endDate: "January 2015",
        },
      ],
      achievement: [
        {
          title: "2023",
          description: "People Magazine Scientist of The Year",
        },
        {
          title: "2022",
          description: "Harvard Medical Journal Prestigious Honor Recipient",
        },
        {
          title: "2021",
          description: "Presidential Honor in Genetic Science ",
        },
      ],
      businessGoal: {
        active: [
          {
            title: "Raise Capital",
            description: "Raise $3-5M for new investment",
            progress: 70,
            timeStamp: "8 mo. 2 days",
          },
          {
            title: "Acquire Property Portfolio",
            description: "Acquire 10 new portfolio properties",
            progress: 18,
            timeStamp: "65 days",
          },
          {
            title: "Develop Retail Center",
            description: "Begin construction on retail center",
            progress: 60,
            timeStamp: "4 wk. 3 days",
          },
        ],
        achieved: [
          {
            title: "Create DNA Nano Map",
            description: "Create DNA nano-map sequencing",
            timeStamp: "Nov. 1, 2022",
            progress: 100,
          },
          {
            title: "Compete AMT Certification",
            description: "Get AMT Certification by end of year",
            timeStamp: "Oct. 8, 2022",
            progress: 100,
          },
          {
            title: "Acquire New Business Office",
            description: "Close on new office location for 2022",
            timeStamp: "Sep. 1, 2022",
            progress: 100,
          },
        ],
        assist: {
          status: "Goal achieved!",
          startDate: "Sep. 15, 2023",
          deadline: "Mar. 31, 2023",
          about:
            "Community Volunteer, Redhead, Friends of Animals, Water Protector, King of Lies. I like pop-up books.",
          stats: {
            totalLinks: 95,
            totalAssist: 101,
            badges: 3,
          },
          links: [
            {
              imageUrl: BlakeB,
              name: "Blake B.",
            },
            {
              imageUrl: LenaX,
              name: "Lena X.",
            },
            {
              imageUrl: NinaM,
              name: "Nina M.",
            },
            {
              imageUrl: TallikaP,
              name: "Tallia P.",
            },
            {
              imageUrl: JordanR,
              name: "Jordan R.",
            },
            {
              imageUrl: JamesC,
              name: "James C.",
            },
            {
              imageUrl: TinaM,
              name: "Tina M.",
            },
          ],

          badge: ["Pioneer", "Leader", "Legend"],
          support: {
            linkCount: 95,
            messageCount: 101,
          },
        },
      },
      businessNeeds: [
        {
          timeStamp: "January 28, 2000",
          title: "New Company Website",
          status: "Active",
          description:
            "Looking for someone that can create a new company website for us",
        },
        {
          timeStamp: "December 11, 2022",
          title: "Find Business Partner",
          status: "Active",
          description:
            "Looking for business partner that has experience building bio-tech companies",
        },
        {
          timeStamp: "November 8, 2022",
          title: "Seeking Experienced Scientist",
          status: "Filled",
          description:
            "Looking for someone that can create a new company website for us",
        },
      ],
      icebreakers: {
        hobbies: ["Martial Arts", "Stargazing", "Art"],
        interest: ["Reading", "Legos", "Music"],
        skills: ["Painting", "Piano", "Gardening"],
        motto: "Science is an oyster, serve it up tastefully.",
      },
    },
    service: {
      featuredServices: [
        {
          title: "Market Research & BI ",
          description:
            "We help startup founders and SMB’s with quality market research into any vertical",
        },
        {
          title: "Market Research & BI ",
          description:
            "We help startup founders and SMB’s with quality market research into any vertical",
        },
      ],
      mainServices: [
        {
          type: "BiDashboard",
          title: "BI Dashboard Report",
        },
        {
          type: "DataMarketing",
          title: "Data & Market Research",
        },
        {
          type: "UiUx",
          title: "Product UI/UX Design",
        },
        {
          type: "Devolpment",
          title: "Software Development",
        },
      ],
    },
  },
  // Joel Calvillo Profile
  {
    blend: "blue",
    backgroundImage: {
      url: JoeICalvilloBackground,
      altText: "User Background picture",
    },
    name: "Joel Calvillo",
    jobTitle: {
      position: "Senior Vice President at ",
      companyName: " KW Commercial South Bay",
    },
    address: "Los Gatos, CA",
    image: {
      url: JoeICalvilloCover,
      altText: "user Picture",
    },
    companyLogo: {
      url: JoeICompany,
      altText: "Company Logo",
    },
    contact: {
      name: "Joel Calvillo",
      jobTitle: {
        position: "Senior Vice President at",
        companyName: "KW Commercial South Bay",
      },
      address: "Los Gatos, CA",
      email: "joel@thecalvillogroup.com",
      phone: {
        number: "+1 (408) 892-9158",
        faxNumber: ["+1 (650) 345-6789"],
      },
      calendar: "Google > Joel Calvillo’s Calendar",
      website: "www.thecalvillogroup.com",
      officeAddress: "16780 Lark Avenue Los Gatos, CA 95032",
      socialMedia: [
        {
          link: "https://www.linkedin.com/in/joelcalvillo/",
          label: "LinkedIn",
        },
        {
          link: "https://www.facebook.com/joelcalvillo",
          label: "Facebook",
        },
        {
          link: "https://www.instagram.com/joelrcalvillo/",
          label: "Instagram",
        },
      ],
      blogLink: [
        {
          link: "https://medium.com/",
          type: "Medium",
          title: "10 Best Locations For Prime Commercial Real Estate",
          description: "Access Article on Medium",
        },
        {
          link: "https://soundcloud.com/",
          type: "GoogleDrive",
          title: "Finding The Right Agent For Your Next Commercial Property",
          description: "Access Audio on SoundCloud",
        },
        {
          link: "https://www.google.com/drive/",
          type: "SoundCloud",
          title: "Joel Calvillo's Service Sheet 2023",
          description: "Access File on Google Drive ",
        },
      ],
    },

    about: {
      bio: "Joel Calvillo is a commercial real estate professional with over 20 years of experience focused on the Sale, and 1031 Exchange of investment properties throughout the Greater Bay Area and across the nation..As senior vice president with KW Commercial and leader of the  Calvillo Group, he offers a deep understanding of the full range  of investment real estate assets types and transactions.He has developed  a successful team of professionals along with strong industry relationships to provide a high level of  service of investment clients. Previous to his affiliation with KW Commercial, Joel was a Vice President and Shareholder with NAI Northern California and an Investment Specialist with The Losness Group Apartment Brokerage. Prior to real estate, Joel spent over a decade in technology sales for top international semiconductor distribution companies Arrow Electronics and Future Electronics, as well as entrepreneur founding a high value business focused on nationwide networking equipment sales. Born and raised in the San Francisco Bay Area, Joel obtained an early education in real estate  investments via his parents who locally owned apartments and other rental properties.",
      profession: [
        {
          lineColor: "blue",
          title: "Company",
          description: "KP Commercial South Bay",
        },
        {
          lineColor: "green",
          title: "Title / Role",
          description: "Senior Vice President",
        },
        {
          lineColor: "purple",
          title: "Occupation",
          description: "Entrepreneur / Senior Executive",
        },
        {
          lineColor: "orange",
          title: "Industry",
          description: "Commercial Real Estate",
        },
      ],
      education: [
        {
          name: "De Anza College",
          startDate: "1994",
          endDate: "1996",
          image: {
            url: DeAnzaCollege,
            altText: "De Anza College",
          },
          major: "Studied Business Management",
          program: "Associate Arts",
        },
        {
          name: "Saint Francis High",
          startDate: "2005",
          endDate: "2008",
          image: {
            url: SaintFrancis,
            altText: "Saint Francis",
          },
          major: "General Electives",
          program: "High School Diploma",
        },
      ],
      accolades: [
        {
          jobTitle: {
            position: "Senior Vice President",
            companyName: " KP Commerical ",
          },
          startDate: "June 2021",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "Shareholder & Vice President ",
            companyName: " NAI NorCal",
          },
          startDate: "Jan 2020",
          endDate: "Present",
        },
        {
          jobTitle: {
            position: "Commercial Specialist ",
            companyName: " KP Commerical ",
          },
          startDate: "Mar 2013",
          endDate: "Jun 2016",
        },
        {
          jobTitle: {
            position: "Real Estate Investment Specialist  ",
            companyName: " Losness Group",
          },
          startDate: "Dec 2008",
          endDate: "Mar 2013",
        },
      ],
      achievement: [
        {
          title: "Extensive Experience",
          description:
            "Over 20 years of experience focused on the Sale, and 1031 Exchange of investment properties",
        },
        {
          title: "Endorsements",
          description:
            "61 Endorsements in Commercial Real Estate 84 Endorsements in Investment Properties",
        },
        {
          title: "Volunteer",
          description: "Director of Compliance",
        },
      ],
      businessGoal: {
        active: [
          {
            title: "Raise Capital",
            description: "Raise $3-5M for new investment",
            progress: 70,
            timeStamp: "8 mo. 2 days",
          },
          {
            title: "Acquire Property Portfolio",
            description: "Acquire 10 new portfolio properties",
            progress: 18,
            timeStamp: "65 days",
          },
          {
            title: "Develop Retail Center",
            description: "Begin construction on retail center",
            progress: 60,
            timeStamp: "4 wk. 3 days",
          },
        ],
        achieved: [
          {
            title: "Raise $2M For Property Acquisition",
            description:
              "Bring in investors to participate in acquisition of new commercial property ",
            timeStamp: "Oct. 8, 2022",
            progress: 100,
          },
          {
            title: "Find Buyer For Commercial Property",
            description:
              "Find a buyer to acquire prime property in Los Gatos, California",
            timeStamp: "Oct. 8, 2022",
            progress: 100,
          },
          {
            title: "Acquire New Business Office",
            description: "Close deal on new office park by early 2023",
            timeStamp: "Dec. 28, 2022",
            progress: 100,
          },
        ],
        assist: {
          status: "Goal achieved!",
          startDate: "May 6, 2022",
          deadline: "Dec. 31, 2022",
          about:
            "Community Volunteer, Redhead, Friends of Animals, Water Protector, King of Lies. I like pop-up books.",
          stats: {
            totalLinks: 95,
            totalAssist: 101,
            badges: 3,
          },
          links: [
            {
              imageUrl: BlakeB,
              name: "Blake B.",
            },
            {
              imageUrl: LenaX,
              name: "Lena X.",
            },
            {
              imageUrl: NinaM,
              name: "Nina M.",
            },
            {
              imageUrl: TallikaP,
              name: "Tallia P.",
            },
            {
              imageUrl: JordanR,
              name: "Jordan R.",
            },
            {
              imageUrl: JamesC,
              name: "James C.",
            },
            {
              imageUrl: TinaM,
              name: "Tina M.",
            },
          ],

          badge: ["Pioneer", "Leader", "Legend"],
          support: {
            linkCount: 95,
            messageCount: 101,
          },
        },
      },
      businessNeeds: [
        {
          timeStamp: "January 28, 2000",
          title: "New Company Website",
          status: "Active",
          description:
            "Looking for someone that can create a new company website for us",
        },
        {
          timeStamp: "December 11, 2022",
          title: "Find Business Partner",
          status: "Active",
          description:
            "Looking for business partner that has experience building bio-tech companies",
        },
        {
          timeStamp: "November 8, 2022",
          title: "Seeking Experienced Scientist",
          status: "Filled",
          description:
            "Looking for someone that can create a new company website for us",
        },
      ],
      icebreakers: {
        hobbies: ["Martial Arts", "Stargazing", "Art"],
        interest: ["Reading", "Legos", "Music"],
        skills: ["Painting", "Piano", "Gardening"],
        motto: "Science is an oyster, serve it up tastefully.",
      },
    },
    service: {
      featuredServices: [
        {
          title: "Professional Services & Products",
          description: "No Details given",
        },
      ],
      mainServices: [
        {
          type: "MultiUnit",
          title: "Multi-Unit Properties",
        },
        {
          type: "Investment",
          title: "NNN Investments",
        },
        {
          type: "Redevolpment",
          title: "Land Redevelopment",
        },
        {
          type: "Industrial",
          title: "Industrial",
        },
      ],
    },
  },
];
