import Header from 'components/Header';
import Footer from 'components/Footer';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
};

export default function MainLayout({ children }) {
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
