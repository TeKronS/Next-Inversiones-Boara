"use client";
import { useRef, useEffect } from "react";
import styles from "./logoIB.module.css";

export const LogoIB = () => {
  const refBoxLogo = useRef<HTMLDivElement>(null);
  const LogoResizeBox = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      refBoxLogo.current?.children[1].classList.remove(styles.animationIBF);
    }, 600);
  }, []);

  function endAnimation() {
    setTimeout(() => {
      LogoResizeBox.current?.classList.remove(styles.logoContainerFullScreen);
      refBoxLogo.current?.classList.remove(styles.BoxLogoCenter);
      refContainer.current?.classList.remove(styles.containerBg);
      refContainer.current?.classList.add(styles.disp);
    }, 700);
  }
  function elementPositionchanged() {
    LogoResizeBox.current?.classList.add(styles.disp);
  }
  function transitionEndRight() {
    refBoxLogo.current?.children[2].classList.remove(styles.animationIB);
  }
  function transitionEndCenter() {
    refBoxLogo.current?.children[0].classList.remove(styles.animationIBF);
  }

  return (
    <div
      ref={refContainer}
      className={`${styles.containerBg} ${styles.logoContainer}`}
    >
      <div
        className={`${styles.logoContainerFullScreen} ${styles.resizeBox}`}
        onTransitionEnd={elementPositionchanged}
        ref={LogoResizeBox}
      >
        <div
          ref={refBoxLogo}
          className={`${styles.boxLogo} ${styles.BoxLogoCenter}`}
        >
          <div
            onTransitionEnd={endAnimation}
            className={`${styles.IBF} ${styles.IBFl} ${styles.animationIBF}`}
          >
            <div></div>
          </div>

          <div
            onTransitionEnd={transitionEndRight}
            className={`${styles.IBFr} ${styles.IBF} ${styles.animationIBF}`}
          >
            <div></div>
          </div>

          <div
            onTransitionEnd={transitionEndCenter}
            className={`${styles.IB} ${styles.animationIB}`}
          >
            <div className={styles.IBTextContainer}>
              <div className={styles.IBText} translate={"no"}>
                IB
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
