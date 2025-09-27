import styles from "./Burger.module.scss";

const Burger = ({ handleToggleMenu, isMenuOpen }) => {
  return (
    <div
      className={`${styles.container} ${isMenuOpen ? styles.active : ""}`}
      onClick={() => handleToggleMenu()}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
