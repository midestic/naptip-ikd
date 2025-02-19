import { IoMdGlobe, IoMdHelp, IoMdSearch } from "react-icons/io";
import styles from "./SectionFour.module.css";

import { useState } from "react";

export default function SectionFour() {
  return (
    <div className={`${styles.sectFourComponent} `}>
      <div className={`${styles.sectFourContainer}  row g-4`}>
        <div className={`${styles.firstDiv} col-lg-3  col-sm-12 mb-3`}>
          <h1>Our Commitment</h1>
          <p>
            At NAPTIP Community Development Group, our commitment stems from a
            deep sense of responsibility to protect, empower, and uplift
            individuals and communities affected by human trafficking. We
            believe that every person deserves to live with dignity, free from
            fear and exploitation.
          </p>
        </div>
        <div className={`${styles.inDiv} col-lg-2 col-sm-12 mb-3`}>
          <div className={`${styles.inDivDiv}`}>
            <h1>
              <IoMdHelp />
            </h1>
          </div>
          <h4>Protecting Vulnerable Individuals</h4>

          <p>
            We tirelessly work to shield those at risk of exploitation, ensuring
            they are safeguarded from traffickers.{" "}
          </p>
        </div>

        <div className={`${styles.inDiv} col-lg-2 col-sm-12`}>
          <div>
            <h1>
              <IoMdSearch />
            </h1>
          </div>
          <h4>Advocating for Justice</h4>
          <p>
            Our group collaborates with legal authorities to ensure traffickers
            are held accountable and survivors receive the justice they deserve.
          </p>
        </div>

        <div className={`${styles.inDiv} col-lg-2 col-sm-12`}>
          <div>
            <h1>
              <IoMdGlobe />
            </h1>
          </div>
          <h4>Collaborating for Greater Impact</h4>
          <p>
            We believe in the power of partnerships. By working with
            governments, NGOs, and local organizations, we amplify our efforts
            and extend our reach to create systemic change.
          </p>
        </div>
      </div>
    </div>
  );
}
