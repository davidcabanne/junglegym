import styles from "./Hero.module.scss";

import Palm from "./stickers/Palm";
import Pear from "./stickers/Pear";
import FightClub from "./stickers/FightClub";
import AllIn from "./stickers/AllIn";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div style={{ color: "var(--light-green)" }}>OUVERTURE PROCHAINE</div>
      <div>DE LA JUNGLE GYM</div>
      <div>Academy</div>
      <Palm />
      <Pear />
      <FightClub />
      <AllIn />
    </div>
  );
};

export default Hero;
