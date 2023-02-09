import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react'
import { IonButton } from '@ionic/react';
import { accolatesData } from '../../../../../constants/index';
import { BlueDotIcon } from '../../../../../assets/icons';
import { CalendarIcon, ForwardIcon } from '../../../../../assets/icons/index';
import "../../../../../style/components/accolades.css"

const Accolades = () => {
  return (
    <>
    {accolatesData?.map(({ description,date, institute }) => (
          <div className='accolades-card'>
            <BlueDotIcon/>
          <div className="accolades-card-detail">
            <div className='accolade-description'>
              <p >{description} <span>{institute}</span></p>
              <div className="date">
              <CalendarIcon
              color={"var(--icon-back)"}
              white={"#868FA0"}
            />
              <p>{date}</p>
              </div>
            </div>
            <div >
              <ForwardIcon />
            </div>
          </div>
          </div>
        ))} 
    </>
  );
}

export default Accolades