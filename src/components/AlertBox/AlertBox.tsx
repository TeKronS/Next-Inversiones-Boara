import { useRef } from "react";
import styles from "./alertBox.module.css";
import { useBlocker } from "./../../hook/useBlocker";

export const AlertBox = ({ transitionFinish }) => {
  const refFixedBox = useRef<HTMLDivElement>(null);
  const response = useRef<boolean | null>(null);

  useBlocker(() => transitionFinish(null), true);

  function clickYes() {
    refFixedBox.current?.classList.toggle("visible");
    response.current = true;
  }
  function clickNo() {
    refFixedBox.current?.classList.toggle("visible");
    response.current = false;
  }
  function transitionEnd() {
    transitionFinish(response.current);
  }

  return (
    <section className={styles.body}>
      <div
        onTransitionEnd={transitionEnd}
        ref={refFixedBox}
        className={`${styles.fixedBox} ${styles.visible}`}
      >
        <div
          className={styles.exitButton}
          onClick={() => transitionFinish(null)}
        />
        <div className={styles.alertBoxElemt}>
          <div>
            <div>
              <span>Tenemos Golosinas y Peluches.</span>
              <span>¿Quiere añadir algun complemento extra?</span>
              <div className={styles.optionButtonBox}>
                <button onClick={clickYes}>SI</button>
                <button onClick={clickNo}>NO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
