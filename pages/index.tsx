import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { validaToken } from '../services/services';

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  try {
    const cookies = cookie.parse(req.headers.cookie || ''); // Obter os cookies usando a função parse do pacote cookie
    const token = cookies?.authorization; // Acessar o valor do cookie "authorization"
    if(!token) throw new Error('Token invalido')
    validaToken(token)
    return {
      props: {}
    };
  } catch (error) {
    return {
      redirect:{
        permanent:false,
        destination: '/login'
      },
      props: {}
    };
  }
};

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}
function readToken() {
  throw new Error('Function not implemented.');
}

