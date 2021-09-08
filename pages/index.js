import Head from 'next/head';
import styles from 'styles/Home.module.css';
import MainLayout from 'components/layouts/MainLayout';
import Button from 'components/base/Button';
import Image from 'next/image';
import reaperLogo from '../public/grimm-electric-reaper.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tooele Electrician</title>
        <meta
          name="description"
          content="Electrician based in Tooele Utah, serving the entire Salt Lake valley"
        />
        <meta
          name="keywords"
          content="electrician, electric, Tooele, Salt Lake, Utah"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ paddingTop: '10vh' }}>
        <Image src={reaperLogo} alt="Grimm Electric Logo" />
      </div>
      {/* <Button color="blue" label="nothing will happen if you press me" /> */}
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
