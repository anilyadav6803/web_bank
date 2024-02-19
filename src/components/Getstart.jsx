import React from 'react'
import styles from '../style'
import { arrowUp} from '../assets'
const Getstart = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer  `}>
<div className={
`${styles.flexCenter} flex-col bg-indigo-950 w-[100%] h-[100%] rounded-full `
}>
<div className={`${styles.flexStart} flex-row`}>
  <p className='font-medium text-[18px] leading-[23px] flex '>
    <span className='text-gradient'>
      Get 
    </span>
    <img src={arrowUp}/>
  </p>
</div>
 <p className='font-medium text-[18px] leading-[23px]  '>
    <span className='text-gradient'>
      Started
    </span>
   
  </p>

</div>
    </div>
  )
}

export default Getstart