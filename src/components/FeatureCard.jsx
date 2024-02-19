import React from 'react'
import features  from '../style'
import styles from '../style';
import {star,shield,send} from '../assets'

const FeatureCard = () => {
  return (
   
  <div className={`flex flex-row p-6 rounded-[20px]  feature-card`}>
   <div>
   <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    
    <img src={star} alt="star" className="w-[50%] h-[50%] object-contain" />
  </div>
  <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
    Rewards
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-white ">
    The best credit cards offer some tantalizing <br/> combinations of promotions and prizes
    </p>
  </div>
   <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    
    <img src={shield} alt="star" className="w-[50%] h-[50%] object-contain" />
  </div>
  <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
    100% Secured
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-white ">
    We take proactive steps make sure <br/> your information and transactions are secure.
    </p>
  </div>
   <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    
    <img src={send} alt="star" className="w-[50%] h-[50%] object-contain" />
  </div>
  <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
    Balance Transfer
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-white ">
    The best credit cards offer some tantalizing <br/> combinations of promotions and prizes
    </p>
  </div>
   </div>
  </div>
);
  
}

export default FeatureCard