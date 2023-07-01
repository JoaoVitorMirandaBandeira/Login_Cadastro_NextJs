import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'
import LoginCard from '../src/components/login_card/LoginCard'
import Style from '../styles/login.module.css'
import Link from 'next/link'
export default function Register(){
    return (
        <div className={Style.login}>
            <form >
                <LoginCard title={'Cadastrar'}>
                    <Input type='email' placeholder="Digite seu e-mail"/>
                    <Input type='password' placeholder="Escolha uma senha"/>
                    <Input type='password' placeholder='Repita a sua senha'/>
                    <Button type='submit'>Cadastrar</Button>
                    <Link href='/login' className={Style.link}>Ja possuo conta!</Link>
                </LoginCard>
            </form>
        </div>
    )
}