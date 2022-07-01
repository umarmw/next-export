import styles from "../styles/Home.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; Powered by Cat
      </a>
    </footer>
  );
};

export default Footer;
