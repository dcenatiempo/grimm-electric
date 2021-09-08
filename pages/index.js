import Head from 'next/head';
import styles from 'styles/Home.module.css';
import MainLayout from 'components/layouts/MainLayout';
import Button from 'components/base/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Grimm Electric</h1>
        <Button color="blue" label="nothing will happen if you press me" />
      </main>
    </div>
  );
}

Home.layout = MainLayout;
