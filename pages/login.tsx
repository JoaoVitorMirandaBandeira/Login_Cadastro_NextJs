import Style from "../styles/login.module.css"
import LoginCard from "../src/components/login_card/LoginCard"
import Input from "../src/components/input/Input"
import Button from "../src/components/button/Button"
import Link from "next/link"
import { ChangeEvent, useState } from "react"
import { FormData } from "./register"
export default function Login(){
    const [formData, setFormData] = useState<FormData>({
        name:'',
        email: '',
        password: '',
        validPassword:''
    })

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    
    return(
        <div className={Style.login}>
            <form>
                <LoginCard title={'Login'}>
                    <Input type="email" placeholder="Digite seu e-mail"required value={formData.name} onChange={handleInputChange}/>
                    <Input type="password" placeholder="Digite sua senha" required value={formData.name} onChange={handleInputChange}/>
                    <Button type="submit">Enviar</Button>
                    <Link href='/register' className={Style.link}>Não tenho conta!</Link>
                </LoginCard>
            </form>
        </div>
        
    )
}