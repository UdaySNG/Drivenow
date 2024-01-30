import React from "react";
import "../scss/components/about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">Over Ons.</h2>
        <p className="about__description">
          Bij DriveNow zijn we gepassioneerd door het leveren van hoogwaardige
          voertuigen en een onvergetelijke rijervaring. Onze missie is om uw
          reis speciaal te maken, of het nu gaat om een korte rit door de stad
          of een uitgebreide roadtrip door prachtige landschappen.
        </p>
        <p className="about__description">
          Wij geloven in de kracht van vrijheid en flexibiliteit. Daarom streven
          we ernaar om de meest diverse vloot van premium auto's aan te bieden,
          zodat u de perfecte auto voor uw avontuur kunt kiezen. Met eenvoudige
          boekingsprocessen en toegewijd personeel staan we klaar om uw reis
          onvergetelijk te maken.
        </p>
      </div>
      <div className="about__image-container">
        <img
          src="https://www.newsauto.gr/wp-content/uploads/2022/02/220214113824_RANGE-ROVER-SPORT-2022-2.jpg"
          alt="Auto in de showroom"
          className="about__image top"
        />
        <img
          src="https://www.topgear.com/sites/default/files/2021/11/Mercedes_C300D_0000.jpg"
          alt="Auto in de showroom"
          className="about__image bottom"
        />
      </div>
    </section>
  );
};

export default About;
