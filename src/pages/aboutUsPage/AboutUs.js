import SectionOne from '../../sections/AboutPageSections/sectionOne/SectionOne';
import SectionTwo from '../../sections/AboutPageSections/sectionTwo/SectionTwo';
import styles from './AboutUs.module.css';


export default function AboutUs() {

    return (

        <div className={`${styles.aboutUspage}`}>
            <SectionOne />

            <SectionTwo />
        </div>
    )
}