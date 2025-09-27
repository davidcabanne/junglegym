import styles from "./MobileMenu.module.scss";

import CallToAction from "../common/CallToAction";

const MobileMenu = ({ isMenuOpen }) => {
  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.active : ""}`}>
      <div className={styles.wrapper}>
        <CallToAction
          mobileMenu
          href="https://docs.google.com/forms/d/e/1FAIpQLScDdcDpIJf1UPcmDsHExsxG-LNnlxVxIlyX8mu9Qm-TR6xaSA/viewform"
        >
          Pré-inscription
        </CallToAction>
        <CallToAction
          mobileMenu
          href="https://www.instagram.com/jungle_gym_academy/"
        >
          Instagram
        </CallToAction>
      </div>
    </div>
  );
};

export default MobileMenu;
