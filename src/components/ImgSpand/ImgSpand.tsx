import styles from "./imgspand.module.css";
// import { useBlocker } from "./../../hook/useBlocker";
import Image from "next/image";

export const ImgSpand = ({ image, setState }) => {
  // useBlocker(setState, true);

  return (
    <div className={styles.}>
      {/* <buttom onClick={setState} /> */}
      <Image alt="" src={image} />
    </div>
  );
};
