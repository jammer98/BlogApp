import React, { forwardRef, useId } from 'react'

function Select({
    options, // we get a options array in this 
    label,
    classname,
    ...props
},ref) {

    const id = useId();

  return (
    <div className='w-full'>
        {label && <label htmlFor='{id}' className=''></label>} 
        <select {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}>
               {options ?.map((option) => ( // conditional map in the options array
                <option key={option} value={option}>
                    {option}
               </option>))}
        </select>   
    </div>
  )
}

export default forwardRef(Select) // we can also pass this ref in the export statement 