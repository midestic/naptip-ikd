import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  console.log(date);

  return (
    <div className={`${styles.footerComponent} container`}>
      <div className={`${styles.footerContainer} row `}>
        <div className="col-sm-12 col-lg-4">
          <h3>NAPTIP IKD</h3>
          <p>Ikorodu Secretariat Opposite General Hospital Ikorodu</p>
          <p>
            <b>Phone:</b> +2349033414253
          </p>
          <p>
            <b>Email:</b> badmususman50@gmail.com
          </p>

          <div className={`${styles.footerSocials}`}></div>
        </div>

        <div className="col-sm-12 col-lg-4">
          <h4>Useful Links</h4>
          <NavLink to="/">Home</NavLink> <br /> <br />
          <NavLink to={"aboutus"}>About Us</NavLink> <br /> <br />
          <NavLink to={"events"}>Events</NavLink> <br /> <br />
          <li className="nav-item dropdown noHover">
            <a
              className="nav-link dropdown-toggle "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Gallery
            </a>
            <ul className="dropdown-menu">
              <NavLink to={"images"}>
                {" "}
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Images
                  </a>
                </li>
              </NavLink>
              <NavLink to={"videos"}>
                <li>
                  <a className="dropdown-item" href="#">
                    Videos
                  </a>
                </li>
              </NavLink>
            </ul>
          </li>
        </div>

        <div className="col-sm-12 col-lg-4">
          <h4>Our Goals</h4>
          <p>Awareness Campaigns</p>
          <p>Community Outreach</p>
          <p>Anti-Trafficking Advocacy</p>
          <p>Global Partnerships</p>
          <p>Survivor Rehabilitation</p>
          <p>Youth Empowerment</p>
          <p>Legal Assistance</p>
          <p>and Lots More............</p>
        </div>

        <div className={`${styles.lastFoot} col-sm-12 col-lg-12`}>
          <p>
            <ion-icon name="copyright"></ion-icon>
            {` ${year}`} <b>naptip-ikd</b> All Rights reserved
          </p>
          <p>Designed by Midestic_JS</p>

          {/* <p className={`${styles.dateTime}`}>{`${ year } / ${ month } / ${ day }`}</p>
                    <p className={`${styles.dateTime}`}>{`${ hour } : ${ minute } : ${ seconds }`}</p> */}
        </div>
      </div>
    </div>
  );
}
