import React from "react"
import Style from "./input.module.css"
interface InputProps extends React.HTMLProps<HTMLInputElement>{
    type: string,
}
export default function Input({type, ...props}:InputProps){
    return(
        <input className={Style.input} type={type} {...props} />
    )
}