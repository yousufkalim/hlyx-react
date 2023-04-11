import { IonButton, IonCard, IonLabel } from "@ionic/react";
import { useContext } from "react";
import { ProfileContext } from "../../../context/profileContext";
import "../../../style/components/portfolio.css";
// import UserDetailCard from "../UserDetailCard/UserDetailCard";
import LargeImage from "../../../assets/LargeImage.png";
import shadeImage from "../../../assets/shadeImage.png";
import checkEyeIcon from "../../../assets/checkEyeIcon.svg";
import minorOne from "../../../assets/minorOne.png";
import minorTwo from "../../../assets/minorTwo.jpg";
import minorThree from "../../../assets/minorThree.png";
import minorFour from "../../../assets/minorFour.png";
import minorFive from "../../../assets/minorFive.png";
import minorSix from "../../../assets/minorSix.png";
import minorSeven from "../../../assets/minorSeven.jpg";
import minorEight from "../../../assets/minorEight.png";
import minorNine from "../../../assets/minorNine.png";


export const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5229 8.38386V11.1139C10.5229 13.3939 9.61285 14.3039 7.33285 14.3039H4.61285C2.34285 14.3039 1.42285 13.3939 1.42285 11.1139V8.38386C1.42285 6.11386 2.33285 5.20386 4.61285 5.20386H7.34285C9.61285 5.20386 10.5229 6.11386 10.5229 8.38386Z"
      stroke="#9899A0"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.4232 4.48396V7.21395C14.4232 9.49395 13.5132 10.404 11.2332 10.404H10.5232V8.38396C10.5232 6.11396 9.61324 5.20395 7.33324 5.20395H5.32324V4.48396C5.32324 2.20396 6.23324 1.30396 8.51324 1.30396H11.2432C13.5132 1.30396 14.4232 2.21396 14.4232 4.48396Z"
      stroke="#9899A0"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ArrowIcon = () => (
  <svg
    width="7"
    height="16"
    viewBox="0 0 7 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.998047 1.30383L5.99805 7.80383L0.998047 14.3038"
      stroke="#868FA0"
      stroke-width="1.72135"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Portfolio = () => {
  const { userProfile } = useContext(ProfileContext);
  return (
    <>
      {/* <UserDetailCard /> */}
      <div className="wrapperClass" style={{position:'relative'}}>
        <div className="fullImgDiv" >
              <img src={LargeImage}  alt="FullImage" style={{width:'100%'}}/>
        </div>
        <div className="shadeDive" style={{width:'33px' , position:"absolute", top:'3%',right:'86%'}} > <img src={checkEyeIcon}  alt="Image" style={{width:'100%'}}></img></div>
        <div className="shadeDive" style={{width:'100%' , backgroundSize: 'cover', position:"absolute", top:'17%',right:'0%'}} > <img src={shadeImage}  alt="Image" style={{width:'100%'}}></img></div>
<div className="picTextDiv" style={{padding:'4%' ,position:"absolute", top:'38%',zIndex:'1'}}>
  
<div className="txtContentDiv" style={{display:'flex', flexDirection:'column'}}><h2 className="headingImages" style={{fontFamily:'poppins'}}>Walking The Line</h2>
<p className="paraTxt" style={{fontFamily:'poppins'}}>This is me at Navajo Hills Village touring the beautiful location back in March 2022.</p>
</div>
</div>
        <div className="minorImgRowWrapper" style={{display:'flex', flexDirection:'column',maxHeight:'30rem',justifyContent:'space-between'}}>
    <div className="minorImg1" style={{display:'flex', flexDirection:'row',minHeight:'4rem',justifyContent:'space-between'}}> 
    <div className="img11" style={{width:'33%'}}> <img src={minorOne}  alt="Image" /></div>
    <div className="img22"style={{width:'33%'}}> <img src={minorTwo}  alt="Image" /></div>
    <div className="img33" style={{width:'33%'}}><img src={minorThree}  alt="Image" /> </div>

</div>
    <div className="minorImg2" style={{display:'flex', flexDirection:'row',minHeight:'4rem',justifyContent:'space-between'}}> 
    <div className="img44" style={{width:'33%'}}> <img src={minorFour}  alt="Image" /></div>
    <div className="img55" style={{width:'33%'}}><img src={minorFive}  alt="Image" /></div>
    <div className="img66" style={{width:'33%'}}> <img src={minorSix}  alt="Image" /></div>
</div>

<div className="minorImg3" style={{display:'flex', flexDirection:'row',minHeight:'4rem' ,width:'100%',justifyContent:'space-between'}}>
<div className="img77" style={{width:'33%'}}><img src={minorSeven}  alt="Image" /></div>
<div className="img88" style={{width:'33%'}}><img src={minorEight}  alt="Image" /></div>
<div className="img99" style={{width:'33%'}}><img src={minorNine}  alt="Image" /></div>
   </div>
   </div>

      </div>
      {/* <IonCard className="service-card-container border_none">
        <div className="service-card-title">
          <IonLabel className="card-heading-lg">Portfolio</IonLabel>

          <IonButton fill="outline" shape="round" className="view-all-button">
            View All
          </IonButton>
        </div>

        {userProfile?.portfolioTitle && (
          <div style={{ display: "flex", gap: 11 }}>
            <div style={{ width: 4, backgroundColor: "#236BFE", height: 42 }} />
            <p
              style={{
                fontSize: 15,
                lineHeight: "20px",
                letterSpacing: "0.04em",
                fontWeight: 600,
                color: "#9899A0",
                maxWidth: 188,
              }}
            >
              {userProfile?.portfolioTitle}
            </p>
          </div>
        )}

        {userProfile?.portfolio && (
          <div className="container">
            {userProfile?.portfolio?.map((src: any, index: number) => (
              <div className="box" key={index}>
                <img src={src} alt="portfolio" />
              </div>
            ))}
          </div>
        )}

        {userProfile?.mslLink && (
          <div
            style={{
              display: "flex",
              gap: 17,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 6,
                alignItems: "center",
              }}
            >
              <CopyIcon />
              <p style={{ color: "#9899A0" }}>View My MLS Listings</p>
            </div>
            <ArrowIcon />
          </div>
        )}
      </IonCard> */}
    </>
  );
};

export default Portfolio;
