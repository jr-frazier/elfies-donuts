import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Snowfall from "react-snowfall";
import Confetti from "react-dom-confetti";

export default function Home() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  const handleButtonClick = () => {
    setButtonClicked(true);

    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
    // setButtonClicked(false);
  };

  return (
    <div className={styles.main}>
      <div className="flex flex-col justify-center items-center">
        <Image
          width={800}
          height={200}
          src="/donuts.png"
          alt="Picture of a donut"
        />
        <h1 className="text-5xl font-bold text-red-600">Elfies Donuts</h1>
      </div>
      <button onClick={handleButtonClick} className="btn btn-secondary mt-4">
        Order
      </button>
      <Confetti active={buttonClicked} config={config} />
      <div className="flex pt-64">
        <div className="mr-3">
          <Image
            src="/una.jpg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <p className="text-center">Manager</p>
        </div>
        <div>
          <Image
            src="/elfie.jpg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <p className="text-center">Owner</p>
        </div>
      </div>
      <Snowfall />
    </div>
  );
}
