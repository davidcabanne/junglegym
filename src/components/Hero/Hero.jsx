import styles from "./Hero.module.scss";

import Palm from "./stickers/Palm";
import Pear from "./stickers/Pear";
import FightClub from "./stickers/FightClub";
import AllIn from "./stickers/AllIn";
import Eat from "./stickers/Eat";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div style={{ color: "var(--light-green)", zIndex: -1 }}>
        OUVERTURE PROCHAINE
      </div>
      <div style={{ zIndex: -1 }}>DE LA JUNGLE GYM</div>
      <div style={{ zIndex: -1 }}>Academy</div>
      <Palm />
      <Pear />
      <FightClub />
      <AllIn />
      <Eat />
    </div>
  );
};

export default Hero;
