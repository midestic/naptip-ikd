import styles from './Sectiontwo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/duotone-light-svg-icons';
import { faPhone } from '@fortawesome/duotone-light-svg-icons';
import { faEnvelope } from '@fortawesome/duotone-light-svg-icons';



export default function SectionTwo() {

    return (

        <div className={`${styles.sectionTwo} container`} >

            <div className={`${styles.addressAndFormrow} row`}>



                <div className='col-lg-5 col-sm-12'>

                    <div className={`${styles.eachDiv} flex`} >

                        <div className={`${styles.contactIconDiv}`}><h4><FontAwesomeIcon icon={faLocationDot} /></h4></div>

                        <div className={`${styles.eachDivInner} container`} >
                            <h5>Address</h5>
                            <p>Ikorodu Secretariat Opposite General Hospital Ikorodu</p>

                        </div>

                    </div>



                    <div className={`${styles.eachDiv} flex`} >
                        <div className={`${styles.contactIconDiv}`}><h4><FontAwesomeIcon icon={faPhone} /></h4></div>

                        <div className={`${styles.eachDivInner} container`} >
                            <h5>Phone</h5>
                            <p>+2349033414253</p>

                        </div>


                    </div>


                    <div className={`${styles.eachDiv} flex`} >
                        <div className={`${styles.contactIconDiv} `}><h4><FontAwesomeIcon icon={faEnvelope} /></h4></div>

                        <div className={`${styles.eachDivInner} container`} >
                            <h5>Email</h5>
                            <p>badmususman50@gmail.com</p>

                        </div>



                    </div>


                </div>

                <div className='col-lg-7 col-sm-12'>

                    <div className="container">




                        <form className={`${styles.form}  `}>


                            <div className={`${styles.nameAndEmailDiv} row `}>


                                <div className={`${styles.inpDiv} col-lg-6 col-12 mb-3`}>
                                    <input className={`${styles.inputBox} w-100`} type="text" required placeholder='Your Name' />
                                </div>


                                <div className="col-lg-6 col-12 mb-3">
                                    <input className={`${styles.inputBox} w-100`} type="email" required placeholder='Your Email' />
                                </div>

                            </div>

                            <div className={`${styles.textAreaDiv} row`}>

                                <textarea placeholder='Your Message......'></textarea>

                            </div>



                        </form>

                        <div className={`${styles.btnDiv} row`} >
                            <button className='btn '>SUBMIT</button>
                        </div>
                    </div>



                </div>



            </div >





        </div >
    )
}