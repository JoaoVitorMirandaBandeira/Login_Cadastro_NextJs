import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'
import LoginCard from '../src/components/login_card/LoginCard'
import Style from '../styles/login.module.css'
import Link from 'next/link'
import {ChangeEvent, FormEvent, useState} from 'react'
import { useRouter } from 'next/router'
import { registerUser } from '../services/services'
import { setCookie } from 'cookies-next'
export interface FormData{
    name:string,
    email:string,
    password:string,
    validPassword:string
}
export default function Register(){
    const [formData, setFormData] = useState<FormData>({
        name:'',
        email: '',
        password: '',
        validPassword:''
    })

    const [erro, setError] = useState('')
    const router = useRouter()

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleForm = async (event:FormEvent<HTMLFormElement>) =>{
        try {
            event.preventDefault()
            if(formData.password !== formData.validPassword) throw new Error ("A senhas não coferem")
            const token = await registerUser(formData)
            setCookie('authorization',token)
            router.push('/')
        } catch (error:any) {
            setError(error.message)
        }
    }

    return (
        <div className={Style.login}>
            <form onSubmit={handleForm}>
                <LoginCard title={'Cadastrar'}>
                    <Input type='text' placeholder='Digite seu nome' name='name' required value={formData.name} onChange={handleInputChange}/>
                    <Input type='email' placeholder="Digite seu e-mail" name='email' required value={formData.email} onChange={handleInputChange}/>
                    <Input type='password' placeholder="Escolha uma senha" name='password' required value={formData.password} onChange={handleInputChange}/>
                    <Input type='password' placeholder='Repita a sua senha' name='validPassword' required value={formData.validPassword} onChange={handleInputChange}/>
                    <Button type='submit'>Cadastrar</Button>
                    {erro && <p>{erro}</p>}
                    <Link href='/login' className={Style.link}>Ja possuo conta!</Link>
                </LoginCard>
            </form>
        </div>
    )
}