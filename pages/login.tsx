import Style from "../styles/login.module.css"
import LoginCard from "../src/components/login_card/LoginCard"
import Input from "../src/components/input/Input"
import Button from "../src/components/button/Button"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react"
import { loginUser } from "../services/services"
import { setCookie } from "cookies-next"
import { useRouter } from "next/router"
export interface LoginFormData{
    email:string,
    password: string
}
export default function Login(){
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    })
    const router = useRouter()
    const [error,setError] = useState('')

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        try{
            event.preventDefault()
            const token = await loginUser(formData)
            setCookie('authorization',token)
            router.push('/')
        }catch(erro:any){
            setError(erro.message)
        }
    }
    
    return(
        <div className={Style.login}>
            <form onSubmit={handleFormSubmit}>
                <LoginCard title={'Login'}>
                    <Input type="email" placeholder="Digite seu e-mail"required name="email" value={formData.email} onChange={handleInputChange}/>
                    <Input type="password" placeholder="Digite sua senha" required name="password" value={formData.password} onChange={handleInputChange}/>
                    <Button type="submit">Enviar</Button>
                    {error && <p>{error}</p>}
                    <Link href='/register' className={Style.link}>Não tenho conta!</Link>
                </LoginCard>
            </form>
        </div>
        
    )
}