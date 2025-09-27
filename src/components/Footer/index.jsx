import CallToAction from "../common/CallToAction";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <CallToAction color="lightGreen">PRÉ-INSCRIPTION</CallToAction>
      <CallToAction color="light">Instagram</CallToAction>
    </footer>
  );
};
export default Footer;
