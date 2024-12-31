import { NavLink, Outlet } from "react-router-dom";
import styles from './RootLayout.module.css'
import Footer from "../../sections/footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/duotone-light-svg-icons";

let logo = './images/logo.jpg'

export default function RootLayout() {






  function naptipSite() {


    window.open("https://naptip.gov.ng/", '_blank');



  }


  return (
    <div className={`${styles.navComponent} root-layout`} >


      <nav className={` ${styles.navContainer} container navbar fixed-top navbar-expand-sm bg-body-tertiary `}  >
        <div className={`${styles.navWrapper} container-fluid`} >
          <a className={`${styles.navLogo} navbar-brand`} href='/'>

            <img src={logo} alt="Bootstrap" className="logo" width="100" height="100"></img>

          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className={`${styles.menuDiv} collapse navbar-collapse row`} id="navbarNavDropdown">
            <ul className={`${styles.navUl} navbar-nav`} >


              <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#"> <NavLink to="/">Home</NavLink></a> </li>


              <li className="nav-item">

                <a className="nav-link" href="#"> <NavLink to="aboutus">About Us </NavLink></a>
              </li>





              <li className="nav-item">
                <a className="nav-link" href="#">  <NavLink to='events'>Events </NavLink></a>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gallery
                </a>


                <ul className="dropdown-menu">

                  <li>  <a className="dropdown-item" href="#"><NavLink to="images">Images  </NavLink></a></li>

                  <li><a className="dropdown-item" href="#"> <NavLink to='videos'>Videos</NavLink></a></li>

                </ul>


              </li>

              <li className="nav-item">
                <a className="nav-link" href="#"> <NavLink to='contact'>Contact</NavLink> </a>
              </li>

              <li className={`${styles.linkWebsite} nav-item`}>
                <button onClick={naptipSite} type="button" className="btn btn-outline-info "><b>NAPTIP WEBSITE </b> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
              </li>
            </ul>



          </div>
        </div>
      </nav >




      <Outlet />


      <Footer />


    </div >


  )

}