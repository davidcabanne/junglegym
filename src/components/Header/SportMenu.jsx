import styles from "./SportMenu.module.scss";

const SportMenu = () => {
  return (
    <ul className={styles.container}>
      <li>BOXE</li>
      <li>MUAY- THAÏ</li>
      <li>MMA</li>
      <li>JJB/NO-GI</li>
      <li>FITNESS</li>
    </ul>
  );
};

export default SportMenu;
