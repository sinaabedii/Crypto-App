import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>Sina Abedi | The third project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Sina with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
