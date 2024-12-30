import Videos from '../../gallery/video/Videos'
import styles from './VideoPage.module.css'



export default function VideoPage() {

    return (
        <div className={`${styles.videoPage}`}>


            <div className="row">
                <div className={`${styles.sectionOne} col-lg-sm col-lg-12`} >

                    <h1>Videos</h1>
                    <p>NAPTIP is dedicated to fighting human trafficking through our community sensitization campaigns.
                        These outreach programs are designed to inform and educate the public, offering essential tools
                        to prevent trafficking. By engaging directly with local communities, we aim to empower individuals and protect vulnerable groups.
                        Watch the videos below to learn more about our efforts and how you can help create a safer, more informed society.</p>
                </div>
            </div>

            <Videos />

        </div>
    )
}