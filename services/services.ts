import { LoginFormData } from "../pages/login";
import { FormData } from "../pages/register"
import { sign, verify } from 'jsonwebtoken'

const SECRET: string = process.env.NEXT_PUBLIC_JWT_SECRET || '';

function createToken(formData: FormData) {
    return sign({ email: formData.email, name: formData.name }, SECRET)
}

function readToken(token: string) {
    try {
        return verify(token, SECRET)
    } catch (error) {
        throw new Error('Token invalido')
    }
}

export function validaToken(token:string){
    return readToken(token)
}

export async function registerUser(formData: FormData) {
    try {
        const require = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/register`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": formData.name,
                "email": formData.email,
                "password": formData.password
            })
        })
        const json = await require.json()
        if (require.status !== 201) throw new Error(json)
        const token = createToken(formData)
        return token
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function loginUser(loginFormData: LoginFormData) {
    try {
        const require = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/v1/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "email": loginFormData.email,
                "password": loginFormData.password
            })
        })
        const json = await require.json()
        if (require.status !== 200) throw new Error('Email ou senha Errado')
        const token = createToken(json)
        return token
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export function getCookieValue(cookieName: string): string | undefined {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const [name, value] = cookie.split('=');

        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }

    return undefined;
}
