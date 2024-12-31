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
                            Our president kicked off the event with an impactful introductory speech, outlining NAPTIP’s
                            mission and efforts. <br />

                            Throughout the event, various CDS members took turns speaking and sensitizing the audience,
                            providing diverse perspectives and valuable insights. The highlight of the day was a powerful drama
                            performed by our CDS members. <br /> The play depicted a scenario where a student named Aisha, portrayed by Cynthia,
                            was being lured into trafficking by Brother Solomon, played by Midestic_JS. <br /> The drama underscored the
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

                        <p>  The sensitization programme held at the House of Chloe Orphanage Home on December
                            16, 2024, was a resounding success. Organized by the following community
                            development service groups (CDS), National Agency for the Prohibition
                            of Trafficking in Persons (NAPTIP), Medical and Health, Sanitation,
                            and Education. <br /> The sensitization aimed to demonstrate care and compassion
                            for vulnerable orphans by providing essential needs and promoting their
                            well-being and quality of life during this festive period. <br />


                            The sensitization programme successfully achieved its objective, showcasing the collective effort of the corps
                            members to support vulnerable people. This initiative highlighted the importance of inter community development
                            service collaboration and community engagement. The members of staffs of the orphanage home gladly accepted the
                            gifts and appreciated the volunteers for the hospitality shown.
                            Attached herewith are pictorial evidence of the sensitization program and the receipt of items delivered.

                        </p>

                    </div>

                </div>


            </div>

        </div >
    )
}