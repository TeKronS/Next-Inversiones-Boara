"use client";
import styles from "./menu.module.css";
import { ArrowDown } from "@/img/svg/arrowDown";
import { useRef } from "react";

export const MenuDesplegable = () => {
  const refNavBody = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLDivElement>(null);

  let isOpen = false;

  function clickButton() {
    if (isOpen) {
      refButton.current?.children[0]?.classList.add(styles.svgOpen);
      refButton.current?.classList.add(styles.botonOpen);
      refNavBody.current?.classList.add(styles.bodyOpen);
      isOpen = false;
    } else {
      mouseOver();
    }
  }

  function mouseOver() {
    refButton.current?.children[0]?.classList.remove(styles.svgOpen);
    refButton.current?.classList.remove(styles.botonOpen);
    refNavBody.current?.classList.remove(styles.bodyOpen);
    isOpen = true;
  }

  return (
    <nav onMouseLeave={mouseOver} ref={refNavBody} className={styles.body}>
      <div ref={refButton} onClick={clickButton} className={styles.boton}>
        <ArrowDown />
      </div>
      <section className={styles.innerBody}>
        <div className={styles.optionsContainer}>
          <li>Cumpleaños</li>
          <li>San Valentin</li>
          <li>Dia de la Madre</li>
          <li>Dia del Padre</li>
          <li>Otros</li>
        </div>
      </section>
    </nav>
  );
};
