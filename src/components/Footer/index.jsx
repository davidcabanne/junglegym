import CallToAction from "../common/CallToAction";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <CallToAction
        color="lightGreen"
        href="https://docs.google.com/forms/d/e/1FAIpQLScDdcDpIJf1UPcmDsHExsxG-LNnlxVxIlyX8mu9Qm-TR6xaSA/viewform"
      >
        INSCRIPTION
      </CallToAction>
      <CallToAction
        color="light"
        href="https://www.instagram.com/junglegymacademy/"
      >
        Instagram
      </CallToAction>
    </footer>
  );
};
export default Footer;
