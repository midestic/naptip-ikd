import SectionOne from '../../sections/eventSections/sectionOne/SectionOne'
import styles from './Events.module.css'

export default function Events() {
    return (
        <div className={`${styles.eventComponent}`} >

            <div className="row">
                <div className={`${styles.sectionOne} col-lg-sm col-lg-12`} >

                    <h1>Events</h1>

                    <p>NAPTIP is dedicated to fighting human trafficking through our
                        community sensitization campaigns. Recently, we visited Goodswill
                        Secondary School, where our president and website developer, Midestic_JS,
                        engaged students and teachers in informative sessions and an impactful drama
                        highlighting the dangers of trafficking. The event demonstrated the importance
                        of awareness and timely action. We have more events planned, including community
                        workshops, school outreach programs, and public seminars, all aimed at empowering
                        individuals and protecting vulnerable groups. Join us in our upcoming events to help
                        create a safer, more informed society.</p>

                </div>
            </div>

            <SectionOne />
        </div>
    )
}