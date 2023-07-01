import Style from "../styles/login.module.css"
import LoginCard from "../src/components/login_card/LoginCard"
import Input from "../src/components/input/Input"
export default function Login(){
    return(
        <div className={Style.login}>
            <LoginCard title={'Login'}>
                <Input type="email" placeholder="Digite seu e-mail"/>
                <Input type="password" placeholder="Digite sua senha"/>
            </LoginCard>
        </div>
        
    )
}