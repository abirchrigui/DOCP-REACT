import React from "react";

const Section1 = () => {
  return (
    <div>
      <section className="Section1">
        <img
          className="lead-logo"
          src="https://www.docplanner.com/img/sygnet.png"
          srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"
        />
        <h1 className="titre1">Making the healthcare experience more human</h1>

        <div className="div-paragraph">
          <p className="paragraph1">
            We want patients to find the perfect doctor and book an
            appointment in the most easy way. The patient journey should be
             enjoyable, and that's why we are always next to them: to help
            them
            find the best possible care. Anytime, anywhere.
          </p>

          <p className="paragraph2">
            We also help doctors to better manage their practice and build their{" "}
            
            online reputation. With our integrated end-to-end solution,doctors{" "}
           are able not only to improve their online presence, but also
            to devote their time to what really matters: their patients.
          </p>
        </div>
      </section>
    </div>
  );
};
export default Section1;
