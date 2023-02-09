import React from 'react'

const CustomInput = ({ type, name, className, id, labelName, placeholder }) => {
  return (
    <div>
      { labelName && <label htmlFor={name} className="text-white text-lg font-normal py-2">{labelName}</label> }
      <input type={type} name={name} id={id}  className={className} placeholder={placeholder}/>
    </div>
  )
}

export default CustomInput