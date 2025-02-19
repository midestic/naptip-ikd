import styles from "./SectionSix.module.css";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
  IoLogoXbox,
} from "react-icons/io";
import { NavLink } from "react-router-dom";

let president = "./images/presPics.jpeg";
let designer = "./images/designer.jpg";
let developer = "./images/developer.jpg";
let vicePres = "./images/vicePres.jpeg";
let genSec = "./images/genSec.jpeg";
let graphDesign = "./images/graphDesigner.jpeg";
let Adesewa = "./images/Adesewa.jpeg";

// SOCIAL MEDIA LINKS

let usmanFacebook = "https://www.facebook.com/usman.badmus";
const usmanX = "https://x.com/midestic_JS";
const usmanLinkdin = "https://www.linkedin.com/in/usman-badmus-59951b24a/";
const usmanWhatsapp = "https://wa.link/q09pn3";

export default function SectionSix() {
  function toScocial(link) {
    window.open(link, "_blank");
  }

  return (
    <div className={`${styles.sectionSixDiv}`}>
      <div className="container">
        <h1 className="cardH5">KEY CONTRIBUTORS.....</h1>

        <div className={`${styles.contDiv} row row-cols-1 row-cols-md-3 g-4`}>
          <div className="col ">
            <div className="card h-100 cardStyling">
              {/* <img src={president} className="card-img-top img-fluid" alt="..." /> */}

              <div className="card-body cardBodyStyle">
                <h5 className="card-title"></h5>
              </div>
              <div className="card-footer ">
                <IoLogoWhatsapp size={40} color="gray" />
                <IoLogoFacebook size={40} color="gray" />
                <IoLogoTwitter size={40} color="gray" />
                <IoLogoLinkedin size={40} color="gray" />
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card h-100 cardStyling">
              <img
                src={president}
                className="card-img-top img-fluid"
                alt="image"
              />
              <div className="card-body cardBodyStyle">
                <h5 className=" cardH5 whiteFont">
                  AWORUNSE HAPPINESS FAYOWOLE
                </h5>
                <p className="card-text whiteFont "> President </p>
                <p className="card-text whiteFont">
                  Aworunse Happiness Fayowole is the current president of the
                  NAPTIP CDS group in Ikorodu for the 2024/2025 period. As the
                  president, he is responsible for leading and coordinating the
                  group's efforts to combat human trafficking and promote the
                  protection of vulnerable persons within the community.{" "}
                </p>
              </div>
              <div className="card-footer">
                <a href="https://wa.link/3zt4hg" target="_blank">
                  <IoLogoWhatsapp size={40} color="gray" />
                </a>

                <a
                  href="https://www.facebook.com/share/15TwVtEAfL/?mibextid=LQQJ4d"
                  target="_blank"
                >
                  <IoLogoFacebook size={40} color="gray" />
                </a>

                <a href="https://x.com/Happyfayo11" target="_blank">
                  <IoLogoTwitter size={40} color="gray" />
                </a>

                <a
                  href="https://www.linkedin.com/in/happiness-aworunse-a01705340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                >
                  <IoLogoLinkedin size={40} color="gray" />
                </a>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card h-100 cardStyling">
              <img
                src={vicePres}
                className="card-img-top img-fluid"
                alt="image"
              />
              <div className="card-body cardBodyStyle">
                <h5 className="whiteFont cardH5">ENEANYA SOMTO PRECIOUS</h5>
                <p className="card-text whiteFont">Vice President</p>
                <p className="card-text whiteFont">
                  Eneanya Somto Precious is the Vice President of the NAPTIP CDS
                  group in Ikorodu for the 2024/2025 period. As Vice President,
                  she plays a key supporting role to the president, Aworunse
                  Happiness Fayowole, and helps in the effective running of the
                  group’s activities. Eneanya is likely responsible for
                  assisting in the planning and execution of campaigns and
                  initiatives aimed at raising awareness about human trafficking
                  and supporting victims of such crimes.
                </p>
              </div>
              <div className="card-footer">
                <a href="https://wa.link/f7ru74" target="_blank">
                  <IoLogoWhatsapp size={40} color="gray" />
                </a>

                <a
                  href="https://www.facebook.com/sommy.presh.5439"
                  target="_blank"
                >
                  <IoLogoFacebook size={40} color="gray" />
                </a>

                <a href="https://x.com/sommypresh15214?s=11" target="_blank">
                  <IoLogoTwitter size={40} color="gray" />
                </a>

                <a
                  href="https://www.instagram.com/sommypresh22"
                  target="_blank"
                >
                  <IoLogoInstagram size={40} color="gray" />
                </a>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card h-100 cardStyling">
              <img
                src={genSec}
                className="card-img-top img-fluid"
                alt="president"
              />
              <div className="card-body cardBodyStyle">
                <h5 className="whiteFont cardH5">AMUBIKAUN AYOMIDE ABIODUN</h5>
                <p className="whiteFont">General Secretary</p>
                <p className="card-text whiteFont">
                  Amubikaun Ayomide Abiodun is the General Secretary of the
                  NAPTIP CDS group in Ikorodu for the 2024/2025 period. In this
                  role, he is responsible for ensuring that the administrative
                  and communication functions of the group are handled
                  efficiently. As General Secretary, Amubikaun plays a vital
                  role in keeping accurate records of meetings, decisions, and
                  group activities, ensuring smooth operations and transparency
                  within the organization.
                </p>
              </div>
              <div className="card-footer">
                <IoLogoWhatsapp size={40} color="gray" />
                <IoLogoFacebook size={40} color="gray" />
                <IoLogoTwitter size={40} color="gray" />
                <IoLogoLinkedin size={40} color="gray" />
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card h-100 cardStyling">
              <img
                src={Adesewa}
                className="card-img-top img-fluid"
                alt="president"
              />
              <div className="card-body cardBodyStyle">
                <h5 className="whiteFont cardH5">AJIBOYE OMOLOLA</h5>
                <p className="whiteFont">Financial Secretary</p>
                <p className="card-text whiteFont">
                  Adesewa is the Financial Secretary of the NAPTIP CDS group in
                  Ikorodu for the 2024/2025 period. In this role, she is
                  responsible for managing the group's finances, ensuring
                  transparency and accountability in all financial transactions.
                  Adesewa keeps accurate records of income and expenditures,
                  prepares financial reports, and ensures that funds are
                  allocated appropriately to support the group's initiatives.
                  Her dedication to financial management helps maintain the
                  stability and efficiency of the organization, enabling it to
                  carry out its mission effectively.
                </p>
              </div>

              <div className="card-footer">
                <a href="https://wa.link/s98cel" target="_blank">
                  <IoLogoWhatsapp size={40} color="gray" />
                </a>

                <a href="">
                  <IoLogoFacebook size={40} color="gray" />
                </a>

                <IoLogoTwitter size={40} color="gray" />
                <IoLogoLinkedin size={40} color="gray" />
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card h-100 cardStyling cardBodyStyle">
              <img src={developer} className="card-img-top" alt="..." />
              <div className="card-body centreDivItems cardBodyStyle">
                <h5 className="whiteFont cardH5 ">
                  BADMUS USMAN (midestic_JS)
                </h5>
                <p className="whiteFont">Front-End Developer</p>
                <p className="card-text whiteFont">
                  Badmus Usman is a dedicated Frontend Developer and an NYSC
                  member passionate about creating impactful digital solutions.
                  As the developer behind this website, he combines technical
                  expertise with a commitment to NAPTIP's mission, using his
                  skills to amplify awareness and drive meaningful change..
                </p>
              </div>
              <div className="card-footer">
                <NavLink>
                  {" "}
                  <IoLogoWhatsapp
                    onClick={() => toScocial(usmanWhatsapp)}
                    size={40}
                    color="gray"
                  />
                </NavLink>
                <NavLink>
                  {" "}
                  <IoLogoFacebook
                    onClick={() => toScocial(usmanFacebook)}
                    size={40}
                    color="gray"
                  />{" "}
                </NavLink>
                <NavLink>
                  {" "}
                  <IoLogoTwitter
                    onClick={() => toScocial(usmanX)}
                    size={40}
                    color="gray"
                  />{" "}
                </NavLink>
                <NavLink>
                  {" "}
                  <IoLogoLinkedin
                    onClick={() => toScocial(usmanLinkdin)}
                    size={40}
                    color="gray"
                  />{" "}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col ">
            <div className="card h-100 cardStyling">
              <img src={graphDesign} className="card-img-top" alt="..." />
              <div className="card-body centreDivItems cardBodyStyle">
                <h5 className="whiteFont cardH5">OKPE DESTINY C.</h5>
                <p className="whiteFont">Graphics Designer</p>
                <p className="card-text whiteFont">
                  Okpe Destiny C. is the talented Graphics Designer of the
                  NAPTIP CDS group in Ikorodu for the 2024/2025 period. He has
                  played a key part in designing the group's banner and flyers
                  used for sensitization efforts. These designs are crucial
                  tools in spreading the message to the community, making
                  information accessible, and visually engaging people in the
                  fight against human trafficking. Okpe Destiny's designs are
                  not only aesthetically pleasing but also purposeful, helping
                  to capture the attention of the public and effectively convey
                  important messages about the dangers of trafficking and the
                  support available to victims.
                </p>
              </div>
              <div className="card-footer">
                <IoLogoWhatsapp size={40} color="gray" />
                <IoLogoFacebook size={40} color="gray" />
                <IoLogoTwitter size={40} color="gray" />
                <IoLogoLinkedin size={40} color="gray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
