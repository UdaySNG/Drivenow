import React, { useState, useEffect } from "react";
import "../scss/components/intro.scss";

const Intro = () => {
  const [isCarLoaded, setIsCarLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleMoreButtonClick = () => {
    console.log("Meer zien geklikt!");
    // Voeg hier de logica toe om naar meer inhoud te navigeren
  };

  useEffect(() => {
    const carImage = new Image();
    carImage.onload = () => {
      console.log("Auto is geladen");
      setIsCarLoaded(true);
    };
    carImage.src = "/img/gls.webp";
  }, []);

  useEffect(() => {
    if (isCarLoaded) {
      setTimeout(() => {
        setIsContentVisible(true);
      }, 1000);
    }
  }, [isCarLoaded]);

  return (
    <section className={`intro ${isCarLoaded ? "loaded" : ""}`}>
      <img
        src="/img/gls.webp"
        alt="Autoverhuur"
        className={`intro__image ${isCarLoaded ? "visible" : ""}`}
      />
      <div className={`intro__content ${isContentVisible ? "visible" : ""}`}>
        <h1 className={`intro__title ${isContentVisible ? "visible" : ""}`}>
          {isContentVisible && "Ontdek de Vrijheid van Rijden."}
        </h1>
        <p className={`intro__description ${isContentVisible ? "visible" : ""}`}>
          {isContentVisible &&
            "Huur vandaag nog de perfecte auto voor jouw avontuur"}
        </p>
        {isContentVisible && (
          <button className={`intro__button ${isContentVisible ? "visible" : ""}`} onClick={handleMoreButtonClick}>
            Meer zien
          </button>
        )}
      </div>
    </section>
  );
};

export default Intro;
