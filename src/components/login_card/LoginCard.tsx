
import { ReactNode } from "react"
import Style from "./LoginCard.module.css"

interface CardLoginProps{
    children: ReactNode,
    title: String
}
export default function LoginCard({children , title}: CardLoginProps){
    return (
        <div className={Style.card}>
            <h2 className={Style.title}>{title}</h2>
            {children}
        </div>
    )
}