import Image from "next/image";
import sticker from "../../../../public/images/stickers/stickerFightClub.png";

import styles from "./FightClub.module.scss";

const Fightclub = () => {
  return (
    <div className={styles.container}>
      <Image
        src={sticker}
        alt="sticker palm"
        fill={true}
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default Fightclub;
