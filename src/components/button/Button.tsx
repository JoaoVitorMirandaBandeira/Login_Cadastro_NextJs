import { ReactNode } from 'react'
import Style from './button.module.css'

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
}
export default function Button({children,...props}:ButtonInterface){
    return(
        <button className={Style.button} {...props} >{children}</button>
    )
}