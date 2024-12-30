

import SectionTwo from '../../sections/contactPage/sectionTwo/SectionTwo';
import styles from './Contact.module.css';


export default function Contact() {
    return (
        <div className={`${styles.contactPage}`}>

            <div className={`${styles.sectionOne} row`}>

                <div className="col-lg-12 col-sm-12">

                    <h1>Contact Us</h1>

                    <p>Thank you for your interest in our mission to combat human trafficking and promote
                        a world where dignity, freedom, and opportunity are fundamental rights for all.
                        We are committed to protecting the vulnerable, empowering survivors, and raising
                        awareness about the devastating impact of trafficking.

                        We value your input and encourage you to reach out to us with any questions,
                        suggestions, or ideas on how we can improve our work and this website. Your
                        feedback is essential as we continue to collaborate, innovate, and advocate
                        for a safer, exploitation-free society.

                        Please use the form below to contact us, share your thoughts, or let us know how
                        we can better serve our community in this important fight. Together, we can make
                        a difference, one life at a time.</p>

                </div>

            </div>


            <SectionTwo />


        </div>


    )
}