import Image from "next/image";
import sticker from "../../../../public/images/stickers/JGAST04.png";

import styles from "./Palm.module.scss";

const Palm = () => {
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

export default Palm;
