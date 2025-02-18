import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./RootLayout.module.css";
import Footer from "../../sections/footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

let logo = "./images/logo.jpg";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function RootLayout() {
  return (
    <div className={`${styles.navComponent} root-layout`}>
      <ScrollToTop /> {/* Place it here inside Router context */}
      <nav
        className={` ${styles.navContainer} container navbar fixed-top navbar-expand-sm bg-body-tertiary `}
      >
        <div className={`${styles.navWrapper} container-fluid`}>
          <a className={`${styles.navLogo} navbar-brand`} href="/">
            <img
              src={logo}
              alt="Logo"
              className="logo"
              width="100"
              height="100"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${styles.menuDiv} collapse navbar-collapse row`}
            id="navbarNavDropdown"
          >
            <ul className={`${styles.navUl} navbar-nav`}>
              <li className="nav-item">
                <NavLink to="/" className="nav-link active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="aboutus" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="events" className="nav-link">
                  Events
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="images" className="dropdown-item">
                      Images
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="videos" className="dropdown-item">
                      Videos
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className={`${styles.linkWebsite} nav-item`}>
                <button type="button" className="btn btn-outline-info">
                  <b>NAPTIP WEBSITE</b>{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}
