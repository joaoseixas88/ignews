
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
    <Head>
      <title>Início  | ig.news</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>
        👏 Hey, Welcome
        </span>
        <h1>News about the <span>React</span> world.
        <p>
          Get access to all the publications<br />
          <span>for $9.90</span>
        </p>
        </h1>
        <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
    </>
  )
}
