const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default function Footer() {
  return (
    <footer style={styles.container}>
      <p>&copy; 2021 Grimm Electric, LLC</p>
      <p>
        Built by <a href="http://dcenatiempo.com">dcenatiempo.com</a>
      </p>
    </footer>
  );
}
