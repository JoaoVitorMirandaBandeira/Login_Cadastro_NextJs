import { FormData } from "../pages/register"
import {sign,verify} from 'jsonwebtoken'

const SECRET: string = process.env.NEXT_PUBLIC_JWT_SECRET || '';

function createToken(formData:FormData){
    return sign({email: formData.email, name:formData.name},SECRET)
}

function readToken(token:string){
    try {
        return verify(token,SECRET)
    } catch (error) {
        throw new Error('Token invalido')
    }
}

export async function registerUser(formData:FormData){
    try {
        const require = await fetch('https://login-cadastro.onrender.com/api/v1/register',{
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name":formData.name,
                "email":formData.email,
                "password":formData.password
            })
        })
        const json = await require.json()
        if(require.status !== 201) throw new Error(json)
        const token = createToken(formData)
        return token
    } catch (error:any) {
        throw new Error(error.message)
    }
}
