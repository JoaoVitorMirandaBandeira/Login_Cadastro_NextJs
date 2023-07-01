import Style from "../styles/login.module.css"
import LoginCard from "../src/components/login_card/LoginCard"
import Input from "../src/components/input/Input"
import Button from "../src/components/button/Button"
import Link from "next/link"
import { useState } from "react"
export default function Login(){
    const [formData, setFormData] = useState()
    return(
        <div className={Style.login}>
            <form>
                <LoginCard title={'Login'}>
                    <Input type="email" placeholder="Digite seu e-mail" value={formData}/>
                    <Input type="password" placeholder="Digite sua senha"/>
                    <Button type="submit">Enviar</Button>
                    <Link href='/register' className={Style.link}>Não tenho conta!</Link>
                </LoginCard>
            </form>
        </div>
        
    )
}