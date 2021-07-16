import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Avatar from "../components/Avatar"
import Button from '../components/Button'
import Subir from '../components/Subir'
import {
  loginWithGoogle,
  onAuthStateChanged
} from '../firebase/client'

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGoogle()
      .then(setUser)
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>novaERP</title>
        <meta name="description" content="Plataforma de control novaERP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenido a novaERP</h1>

        <p className={styles.description}>Plataforma de proveedores</p>
        {user === null && <Button onClick={handleClick}>Iniciar Sesión</Button>}
        {user && user.avatar && (
          <div>
            <Avatar
              alt={user.username}
              src={user.avatar}
              text={user.username}
            />
            <div className={styles.grid}>
              <div className={styles.card}>
                <h2>Subir XML &rarr;</h2>
                <Subir/>
              </div>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Consultar &rarr;</h2>
                <p>Consulta el estatus de los CFDI </p>
              </a>
            </div>
          </div>
        )}
      </main>
      <footer className={styles.footer}>2021 novaERP</footer>
    </div>
  );
}
