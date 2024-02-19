import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import FeatureCard from './FeatureCard'



const Bussiness = () => {
  return (
  <section id='feature' className={layout.section}>
  <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>You do the business,
     <br className='sm:block hidden'/> we’ll handle the money.</h2>
     <p className={`${styles.paragraph} max-w-[500px] text-[#FFFFFFB2]`}>
     With the right credit card, you can improve your financial life <br/> by building credit, earning rewards and saving money. But <br/> with hundreds of credit cards on the market.
     </p>
     <Button styles="mt-10"/>
  </div>

  <FeatureCard/>

  

  </section>
  )
}

export default Bussiness