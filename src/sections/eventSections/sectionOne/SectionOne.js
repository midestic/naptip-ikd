import styles from './SectionOne.module.css'


let eventOne = './images/img48.jpg';
let chloe = './images/chloe.jpeg';



export default function SectionOne() {
    return (
        <div className={`${styles.sectionOne} container`}>

            <div className={`${styles.eventsContainer} row`}>

                <div className='col-sm-12 col-lg-6'>


                    <div className={`${styles.inDiv} col`}>

                        <img src={eventOne} alt="event" className='img-fluid' />


                    </div>

                    <div className={`${styles.innerDiv} col`}>

                        <h5>Visitation to Goodswill school</h5>
                        <p><i>Tuesday, November 19th 2024</i></p>
                        <p>On this day, the NAPTIP CDS group visited Goodswill Secondary School as part of
                            our ongoing community sensitization campaigns. The visit aimed to educate students
                            and teachers about the dangers of human trafficking and the importance of prevention.
                            Our president kicked off the event with an impactful introductory speech, outlining NAPTIP’s mission and efforts.

                            Throughout the event, various CDS members took turns speaking and sensitizing the audience,
                            providing diverse perspectives and valuable insights. The highlight of the day was a powerful drama
                            performed by our CDS members. The play depicted a scenario where a student named Aisha, portrayed by Cynthia,
                            was being lured into trafficking by Brother Solomon, played by Midestic_JS. The drama underscored the
                            manipulative tactics traffickers use and the critical role of vigilance and timely reporting.
                            The visit was a success, leaving a lasting impression on the students and teachers,
                            and reinforcing our commitment to combating human trafficking through education and awareness. </p>

                    </div>

                </div>

                <div className='col-sm-12 col-lg-6 '>

                    <div className={`${styles.inDiv} col`}>

                        <img src={chloe} alt="event" className='img-fluid' />


                    </div>

                    <div className={`${styles.innerDiv} col`}>

                        <h5>Visitation to House of Chloe Orphanage Home</h5>
                        <p><i>Monday, December 16th 2024</i></p>
                        <p>On this day, the NAPTIP CDS group visited the House of Chloe Orphanage Home at Dele Kuti,
                            Ebute Ikorodu, as part of our ongoing community sensitization campaigns. The visit aimed
                            to educate the children and staff about the dangers of human trafficking and the importance
                            of prevention. We were accompanied by our Local Government Inspector, as seen in the picture
                            above, who also supported the initiative.

                            Our president opened the event with an impactful introductory speech, outlining NAPTIP’s
                            mission and efforts in combating human trafficking. Various CDS members took turns speaking,
                            offering diverse perspectives and valuable insights to the children and staff.

                            In addition to the sensitization session, we donated foodstuffs and other essential items
                            to the orphanage, supporting their well-being. The visit was a success, leaving a lasting
                            impression on the children and staff, and further reinforcing our commitment to raising
                            awareness and preventing human trafficking.



                        </p>

                    </div>

                </div>


            </div>

        </div >
    )
}