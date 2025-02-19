import styles from "./SectionFive.module.css";

import {
  IoMdBrush,
  IoMdDocument,
  IoMdGlobe,
  IoMdHammer,
  IoMdHand,
  IoMdMedical,
  IoMdMicrophone,
  IoMdStar,
} from "react-icons/io";

export default function SectionFive() {
  return (
    <div classNameName={`${styles.SectionFiveDiv}`}>
      <div className="container">
        <div
          className={`${styles.gridRow} row row-cols-1 row-cols-lg-4  mx-auto`}
        >
          <div className={`${styles.container} col-lg-2 card cardCont`}>
            <div className={`${styles.divOne} content`}>
              <h1>
                <IoMdMicrophone />
              </h1>

              <p>Awareness Campaigns</p>
            </div>
          </div>

          <div className={`${styles.divTwo} col card cardCont`}>
            <div className="content">
              <h1>
                <IoMdHand />
              </h1>

              <p>Community Outreach</p>
            </div>
          </div>

          <div className={`${styles.divThree} col card cardCont`}>
            <div className="content">
              <h1>
                <IoMdDocument />
              </h1>

              <p>Anti-Trafficking Advocacy</p>
            </div>
          </div>

          <div className={`${styles.divFour} col-lg-3 card cardCont`}>
            <div className="content">
              <h1>
                <IoMdGlobe />
              </h1>

              <p>Global Partnerships</p>
            </div>
          </div>

          <div className={`${styles.divFive} col card cardCont`}>
            <div className="content">
              <h1>
                <IoMdMedical />
              </h1>

              <p>Survivor Rehabilitation</p>
            </div>
          </div>

          <div className={`${styles.divSix} col card cardCont`}>
            <div className="content">
              <h1>
                <IoMdStar />
              </h1>

              <p>Youth Empowerment</p>
            </div>
          </div>

          <div className={`${styles.divSeven} col-lg-2 card cardCont`}>
            <div className="content">
              <h1>
                <IoMdHammer />
              </h1>

              <p>Legal Assistance</p>
            </div>
          </div>

          <div className={`${styles.divEight} col card cardCont`}>
            <div className="content">
              <h1>
                <IoMdBrush />
              </h1>

              <p>Volunteer Programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
