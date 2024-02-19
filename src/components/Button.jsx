import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-sm font-medium text-[18px] ${styles} `}>
  Get started
    </button>
  )
}

export default Button