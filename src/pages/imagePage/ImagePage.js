import Images from '../../gallery/image/Images';
import styles from './ImagePage.module.css';


export default function ImagePage() {

    return (

        <div className={`${styles.imagePage}`}>

            <div className="row">
                <div className={`${styles.sectionOne} col-lg-sm col-lg-12`} >

                    <h1>Images</h1>
                    <p>NAPTIP continues its mission to combat human trafficking through community sensitization campaigns.
                        Our outreach programs aim to raise awareness, educate the public, and provide essential tools to
                        prevent trafficking in all its forms. With each event, we engage directly with local communities,
                        sharing vital information to empower individuals and protect vulnerable groups. These efforts are
                        crucial in creating a safer and more informed society.</p>


                </div>
            </div>

            <Images />


        </div>

    )
}