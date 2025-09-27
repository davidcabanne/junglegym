import styles from "./CallToAction.module.scss";

const CallToAction = ({ children, color, href, mobileMenu }) => {
  return (
    <a
      href={href}
      className={`${styles.container} ${styles[color]} ${
        mobileMenu ? styles.mobileMenu : ""
      }`}
    >
      {children}
    </a>
  );
};

export default CallToAction;
