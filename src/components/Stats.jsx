import React from 'react'
import {stats} from '../constants'
import styles from '../style'


const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6  pl-10 ` }>
     {stats.map((stat)=> (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]  text-white'>{stat.value}</h4>
        <p className='xs:leading-[21px] leading-[43px] font-normal xs:text-[20px] text-[2opx] text-gradient uppercase ml-3 '>{stat.title}</p>
      </div>
     ))}
    </section>
  )
}

export default Stats