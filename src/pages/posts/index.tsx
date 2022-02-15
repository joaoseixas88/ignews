import Head from "next/head"
import styles from './styles.module.scss'

export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>15 de fevereiro de 2022</time>    
                        <strong>Titulo do post</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia corporis neque vitae quisquam quidem nam non, dolorem itaque expedita reprehenderit quasi doloribus recusandae aliquid voluptate vero culpa quia at maxime.</p>
                    </a>
                    <a href="#">
                        <time>15 de fevereiro de 2022</time>    
                        <strong>Titulo do post</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia corporis neque vitae quisquam quidem nam non, dolorem itaque expedita reprehenderit quasi doloribus recusandae aliquid voluptate vero culpa quia at maxime.</p>
                    </a>
                    <a href="#">
                        <time>15 de fevereiro de 2022</time>    
                        <strong>Titulo do post</strong>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia corporis neque vitae quisquam quidem nam non, dolorem itaque expedita reprehenderit quasi doloribus recusandae aliquid voluptate vero culpa quia at maxime.</p>
                    </a>
                </div>
            </main>
        </>
    )
}