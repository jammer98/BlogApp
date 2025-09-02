import React, { forwardRef } from 'react'
import { useId } from 'react'

const Input = forwardRef( function({
    label,
    type = "text",
    classname = "",
    ...props // other diffrent props which have been passsed to the component 
}, ref){

    const id = useId();


    return(
        <div classname='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            // if someone have passed a label in the prop then only we will display this label
            <Input type={type} classname={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full ${classname}`}
            ref={ref} // we have to pass the reference which we have taken by the user we have to pass here ,this is what will give refernece to the parent component
            // this is used to give refrence and handle the state change of the dom 
            {...props}
            id={id}/>
        </div>
    )
})

export default Input