

import styles from './Videos.module.css';

let firstMeeting = './videos/meeting.mp4';
let firstMeet = './videos/meeting.ogv';

let leavingSecmp4 = './videos/leaving-sec.mp4';
let leavingSecogg = './videos/leaving-sec.ogv';

let road3mp4 = './videos/road3.mp4';
let road3ogg = './videos/road3.ogv';

let presTalkmp4 = './videos/pres-talk.mp4';
let presTalkogg = './videos/pres-talk.ogv';

let usmanTalkmp4 = './videos/usman-talk.mp4';
let usmanTalkogg = './videos/usman-talk.ogv';

let dramaOnemp4 = './videos/dramaOne.mp4';
let dramaOneogg = './videos/dramaOne.ogv';

let dramaOEndmp4 = './videos/dramaEnd.mp4';
let dramaEndogg = './videos/dramaEnd.ogv';




let meetingSnapshot = './images/firstMeetingSnapshot.png';




export default function Videos() {




    return (



        <div className={`${styles.videoDiv} container`}>


            <div className="mb-3">


                <div className={`${styles.inDiv} row g-0`}>
                    <div className="col-md-4">
                        <video controls width="100%" height="300px" poster={meetingSnapshot}>
                            <source src={firstMeeting} type="video/mp4" />
                            <source src={firstMeet} type="video/ogg" />
                        </video>
                    </div>
                    <div className={`${styles.innerDiv} col-md-8`} >
                        <div className="card-body">

                            <p className="card-text">"A vibrant morning with the NAPTIP CDS group: members eagerly gather,
                                engaging in lively discussions and cheerful gisting. The atmosphere is filled with laughter
                                and happiness as everyone bonds and enjoys each other's company while waiting for the commencement
                                of the day's meeting. Capturing these moments of camaraderie and joy before we dive into the day's agenda."</p>
                            <p className="card-text"><small className="text-body-secondary float">12/11/2024</small></p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.inDiv} row g-0`}>
                    <div className="col-md-4">


                        <video controls width="100%" height="300px">
                            <source src={leavingSecmp4} type="video/mp4" />
                            <source src={leavingSecogg} type="video/ogg" />
                        </video>

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p className="card-text">"The NAPTIP CDS group president and the developer
                                of our website proudly hold the group banner as they leave the local government building.
                                Ready to embark on the day's sensitization activities, they lead the way with enthusiasm and dedication."</p>
                            <p className="card-text"><small className="text-body-secondary float">19/11/2024</small></p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.inDiv} row g-0`}>
                    <div className="col-md-4">


                        <video controls width="100%" height="300px">
                            <source src={road3mp4} type="video/mp4" />
                            <source src={road3ogg} type="video/ogg" />
                        </video>

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p className="card-text">"The NAPTIP CDS group members at Ikorodu garage, walking with purpose and
                                sharing flyers as they make their way to the venue for the day's sensitization. Spreading awareness
                                and engaging with the community, one step at a time."</p>
                            <p className="card-text"><small className="text-body-secondary float">19/11/2024</small></p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.inDiv} row g-0`}>
                    <div className="col-md-4">


                        <video controls width="100%" height="300px">
                            <source src={presTalkmp4} type="video/mp4" />
                            <source src={presTalkogg} type="video/ogg" />
                        </video>

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p className="card-text">

                                "At Goodswill Secondary School, the NAPTIP CDS group president delivers an impactful introductory speech.
                                Addressing students and teachers, he outlines the mission and efforts of NAPTIP, setting the stage for an
                                informative and engaging sensitization session."
                            </p>
                            <p className="card-text"><small className="text-body-secondary float">19/11/2024</small></p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.inDiv} row g-0`}>
                    <div className="col-md-4">
                        <video controls width="100%" height="300px">
                            <source src={usmanTalkmp4} type="video/mp4" />
                            <source src={usmanTalkogg} type="video/ogg" />
                        </video>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p className="card-text">"Midestic_JS, the developer of our website, takes the stage at Goodswill Secondary School,
                                engaging students in an informative session about NAPTIP. The discussion was interactive and lively, with students
                                eagerly asking questions and gaining valuable insights."</p>
                            <p className="card-text"><small className="text-body-secondary float">19/11/2024</small></p>
                        </div>
                    </div>
                </div>


                <div className={`${styles.inDiv} row g-0`}>
                    <div className="col-md-4">
                        <video controls width="100%" height="300px">
                            <source src={dramaOnemp4} type="video/mp4" />
                            <source src={dramaOneogg} type="video/ogg" />
                        </video>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p className="card-text">"In this powerful drama organized by the NAPTIP CDS members,
                                Aisha (played by Cynthia) is seen contemplating dropping out of school, while Brother Solomon (played by Midestic_JS),
                                fresh from Canada, tries to sweet-talk her into leaving with him.
                                The scene vividly portrays the manipulative tactics often used by traffickers to lure vulnerable individuals."</p>
                            <p className="card-text"><small className="text-body-secondary float">19/11/2024</small></p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.inDiv} row g-0`}>
                    <div className="col-md-4">
                        <video controls width="100%" height="300px">
                            <source src={dramaOEndmp4} type="video/mp4" />
                            <source src={dramaEndogg} type="video/ogg" />
                        </video>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <p className="card-text">"In the gripping conclusion of the drama, Aisha’s friend courageously informs the right
                                authorities, leading to the timely apprehension of Brother Solomon (played by Midestic_JS). Thanks to quick action, the dangerous plot is thwarted,
                                demonstrating the importance of vigilance and reporting trafficking activities to the proper agencies."</p>
                            <p className="card-text"><small className="text-body-secondary float">19/11/2024</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}