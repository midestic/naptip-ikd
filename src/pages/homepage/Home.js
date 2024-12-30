
import SectionFive from '../../sections/homesect3/sectionFive/SectionFive.js';
import SectionFour from '../../sections/homesect3/sectionFour/SectionFour.js';
import SectionSix from '../../sections/homesect3/sectionsix/SectionSix.js';
import SectionThree from '../../sections/homesect3/sectionThree/SectionThree.js';
import styles from './Home.module.css';
import './Home.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/duotone-light-svg-icons';
import { faArrowRight } from '@fortawesome/duotone-light-svg-icons';



let caro1 = "./images/caro1.jpeg";
let caro2 = "./images/caro2.jpeg";
let caro3 = "./images/caro3.jpeg";

let sect2Img = "./images/sect2pics.jpeg";


export default function Home() {

  return (
    <div className={` ${styles.homepage} `}>

      {/* carousel */}

      <div className={`{${styles.caroRow}} row`} >

        <div className={`${styles.caroCol} col-12`}>

          <div className={`${styles.carouselContainer} carousel slide`} id="carouselExampleCaptions" data-bs-ride="carousel" >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active ">
                <img src={caro1} className="d-block w-100" alt="carousel-image" />
                <div className={`${styles.caroCaption} carousel-caption d-md-block`} >
                  <div className="transparent-background" >
                    <div className="card-body">
                      <h5 className={`${styles.caroTitle} colorWhite`}> <b>Explore Our Impactful Solutions</b> </h5>
                      <p className={`${styles.caroText}`} >Discover how Naptip is driving positive change and creating safer environments for everyone.

                      </p>

                      <button className={`${styles.caroBtn} `}> <b> SEE MORE</b></button>


                    </div>
                  </div>
                </div>
              </div>


              <div className="carousel-item">
                <img src={caro2} className="d-block w-100" alt="carousel-image" />
                <div className={`${styles.caro2Caption} carousel-caption d-none d-md-block`} >
                  <div className="transparent-background" >
                    <div className="card-body">
                      <h5 className={`${styles.caroTitle}`}>Explore Our Impactful Solutions</h5>
                      <p className={`${styles.caro2Text}`} >Discover how Naptip is driving positive change and creating safer environments for everyone.

                      </p>
                      <button className={`${styles.caro2Btn} `}> <b> SEE MORE</b></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src={caro3} className="d-block w-100" alt="carousel-image" />
                <div className={`${styles.caro3Caption} carousel-caption d-none d-md-block`}>
                  <div className="transparent-background" >
                    <div className="card-body">
                      <h5 className={`${styles.caroTitle}`}>Explore Our Impactful Solutions</h5>
                      <p className={`${styles.caro2Text}`}>Discover how Naptip is driving positive change and creating safer environments for everyone.

                      </p>
                      <button className={`${styles.caro2Btn} `}> <b> SEE MORE</b></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>


      </div>



      {/* SECTION 2 */}

      <div className={`${styles.sectiontwo} row`}>

        <div className="col-lg-5 col-sm-12 ">


          <div >
            <div className="card-body">
              <h4 className={`${styles.sect2Title} card-title`}>NAPTIP Community Development Group</h4>

              <h5 className={`${styles.sect2subTitle}`}><i> Overview of NAPTIP’s Role in Combating Human Trafficking, Victim Support, and Awareness Efforts</i></h5>


              <div className={`${styles.sect2InnerDiv}`}>
                <p className={`${styles.sect2InnerDivIcon}`}><FontAwesomeIcon icon={faCircleCheck} /></p>
                <p className="card-text"> NAPTIP is a Nigerian government agency established to combat human trafficking,
                  with a focus on prevention, protection of victims, and prosecution of offenders. </p>
              </div>

              <div className={`${styles.sect2InnerDiv}`}>
                <p><FontAwesomeIcon icon={faCircleCheck} /></p>
                <p className="card-text">NAPTIP provides rehabilitation, counseling, and reintegration services for victims of trafficking.</p>
              </div>

              <div className={`${styles.sect2InnerDiv}`}>
                <p><FontAwesomeIcon icon={faCircleCheck} /></p>
                <p className="card-text"> NAPTIP works to raise public awareness about the dangers of human
                  trafficking through campaigns, educational programs, and collaboration with local and international
                  stakeholders to strengthen legal frameworks and policies. </p>
              </div>

              <button className={styles.sect2Btn}><b>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></b></button>


            </div>
          </div>



        </div>


        <div className={`${styles.secondSect2Div} col-lg-5 col-sm-12`} >

          <img src={sect2Img} alt="picture" className='img-fluid' />


        </div>



      </div>

      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />



    </div>
  )
} 