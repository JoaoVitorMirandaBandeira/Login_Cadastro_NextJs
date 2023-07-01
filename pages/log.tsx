import Button from '../src/components/button/Button'
import Input from '../src/components/input/Input'
import LoginCard from '../src/components/login_card/LoginCard'
import Style from '../styles/login.module.css'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

interface FormData {
    name: string;
    email: string;
    password: string;
    validPassword: string;
}

export default function Register() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        validPassword: '',
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode realizar o tratamento do envio do formulário
    };

    return (
        <div className={Style.login}>
            <form onSubmit={handleSubmit}>
                <LoginCard title={'Cadastrar'}>
                    <Input
                        type='text'
                        placeholder='Digite seu nome'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <Input
                        type='email'
                        placeholder='Digite seu e-mail'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <Input
                        type='password'
                        placeholder='Escolha uma senha'
                        name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <Input
                        type='password'
                        placeholder='Repita a sua senha'
                        name='validPassword'
                        value={formData.validPassword}
                        onChange={handleInputChange}
                    />
                    <Button type='submit'>Cadastrar</Button>
                    <Link href='/login' className={Style.link}>
                        Já possuo conta!
                    </Link>
                </LoginCard>
            </form>
        </div>
    );
}
