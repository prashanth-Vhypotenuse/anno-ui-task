import React from 'react'

const CustomButton = ({ type, className, value}) => {
  return (
    <div>
      <button type={type} className={className}>
        {value}
      </button>
    </div>
  )
}

export default CustomButton;