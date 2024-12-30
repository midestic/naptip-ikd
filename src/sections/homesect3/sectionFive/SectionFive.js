import styles from './SectionFive.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMegaphone } from '@fortawesome/duotone-light-svg-icons';
import { faHandshake } from '@fortawesome/duotone-light-svg-icons';
import { faScaleUnbalancedFlip } from '@fortawesome/duotone-light-svg-icons';
import { faGlobe } from '@fortawesome/duotone-light-svg-icons';
import { faHouseMedical } from '@fortawesome/duotone-light-svg-icons';
import { faStar } from '@fortawesome/duotone-light-svg-icons';
import { faScroll } from '@fortawesome/duotone-light-svg-icons';
import { faHammerBrush } from '@fortawesome/duotone-light-svg-icons';





export default function SectionFive() {



  return (
    <div classNameName={`${styles.SectionFiveDiv}`}>

      <div className='container'>




        <div className={`${styles.gridRow} row row-cols-1 row-cols-lg-4  mx-auto`}>

          <div className={`${styles.container} col-lg-2 card cardCont`}>

            <div className={`${styles.divOne} content`}>

              <h1><FontAwesomeIcon icon={faMegaphone} /></h1>


              <p>Awareness Campaigns</p>


            </div>


          </div>


          <div className={`${styles.divTwo} col card cardCont`} >

            <div className="content">

              <h1><FontAwesomeIcon icon={faHandshake} /></h1>


              <p>Community Outreach</p>


            </div>


          </div>


          <div className={`${styles.divThree} col card cardCont`}>

            <div className="content">

              <h1><FontAwesomeIcon icon={faScaleUnbalancedFlip} /></h1>


              <p>Anti-Trafficking Advocacy</p>


            </div>


          </div>

          <div className={`${styles.divFour} col-lg-3 card cardCont`}>

            <div className="content">

              <h1><FontAwesomeIcon icon={faGlobe} /></h1>


              <p>Global Partnerships</p>


            </div>


          </div>


          <div className={`${styles.divFive} col card cardCont`}>

            <div className="content">

              <h1><FontAwesomeIcon icon={faHouseMedical} /></h1>


              <p>Survivor Rehabilitation</p>


            </div>


          </div>

          <div className={`${styles.divSix} col card cardCont`}>

            <div className="content">

              <h1><FontAwesomeIcon icon={faStar} /></h1>


              <p>Youth Empowerment</p>


            </div>


          </div>


          <div className={`${styles.divSeven} col-lg-2 card cardCont`}>

            <div className="content">

              <h1><FontAwesomeIcon icon={faScroll} /></h1>


              <p>Legal Assistance</p>


            </div>


          </div>



          <div className={`${styles.divEight} col card cardCont`}>

            <div className="content">

              <h1><FontAwesomeIcon icon={faHammerBrush} /></h1>


              <p>Volunteer Programs</p>


            </div>


          </div>

        </div>

      </div>

    </div>
  )

}