import styles from './SectionTwo.module.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBadgeCheck } from '@fortawesome/duotone-light-svg-icons';


let abtImg = '../images/chloe.jpeg';

export default function SectionTwo() {
    return (
        <div className={`${styles.aboutSectionTwo}  container`}>

            <div className="row">

                <div className="col-lg-6 col-sm-12">

                    <h3> <i>Empowering Change, Protecting Lives</i></h3>
                    <p><i>At NAPTIP Community Development Group, we are committed to
                        creating a brighter future by fighting against human trafficking and
                        empowering survivors. Our mission is rooted in compassion, collaboration,
                        and a relentless drive to make a difference.</i></p>

                    <div className='side-by-side'><h1><FontAwesomeIcon icon={faBadgeCheck} /></h1> <p>Providing safe spaces, counseling, and empowerment for survivors.</p></div>

                    <div className='side-by-side'><h1><FontAwesomeIcon icon={faBadgeCheck} /></h1> <p>Investigating and prosecuting trafficking cases.</p></div>

                    <div className='side-by-side'><h1><FontAwesomeIcon icon={faBadgeCheck} /></h1> <p>Educating the public to prevent exploitation and support victims.</p></div>
                </div>


                <div className="col-lg-6 col-sm-12">
                    <img src={abtImg} alt="about" className='img-fluid' />
                </div>

            </div>

        </div>
    )
}