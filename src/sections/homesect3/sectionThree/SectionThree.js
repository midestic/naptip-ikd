import styles from './SectionThree.module.css';

export default function SectionThree() {


    return (
        <div className={`${styles.homeSectThree}`} >

            <div className="row">
                <div className="col-lg-3 col-sm-12">

                    <h1>1,500+</h1>
                    <p>Lives Impacted</p>

                </div>
                <div className="col-lg-3 col-sm-12">

                    <h1>200+</h1>
                    <p>Volunteers Engaged</p>

                </div>
                <div className="col-lg-3 col-sm-12">

                    <h1>75+</h1>
                    <p>Awareness Campaigns</p>

                </div>
                <div className="col-lg-3 col-sm-12">

                    <h1>50+</h1>
                    <p>Survivors Rehabilitated</p>

                </div>
            </div>


        </div>
    )
}

