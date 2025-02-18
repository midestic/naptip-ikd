import styles from "./SectionOne.module.css";

let eventOne = "./images/img48.jpg";
let chloe = "./images/chloe.jpeg";
let ayangburen = "./images/ayangburen.jpeg";
let market = "./images/market.jpeg";

export default function SectionOne() {
  return (
    <div className={`${styles.sectionOne} container`}>
      <div className={`${styles.eventsContainer} row`}>
        <div className="col-sm-12 col-lg-6">
          <div className={`${styles.inDiv} col`}>
            <img src={eventOne} alt="event" className="img-fluid" />
          </div>

          <div className={`${styles.innerDiv} col`}>
            <h5>Visitation to Goodswill school</h5>
            <p>
              <i>Tuesday, November 19th 2024</i>
            </p>
            <p>
              On this day, the NAPTIP CDS group visited Goodswill Secondary
              School as part of our ongoing community sensitization campaigns.
              The visit aimed to educate students and teachers about the dangers
              of human trafficking and the importance of prevention. Our
              president kicked off the event with an impactful introductory
              speech, outlining NAPTIP’s mission and efforts. <br />
              Throughout the event, various CDS members took turns speaking and
              sensitizing the audience, providing diverse perspectives and
              valuable insights. The highlight of the day was a powerful drama
              performed by our CDS members. <br /> The play depicted a scenario
              where a student named Aisha, portrayed by Cynthia, was being lured
              into trafficking by Brother Solomon, played by Midestic_JS. <br />{" "}
              The drama underscored the manipulative tactics traffickers use and
              the critical role of vigilance and timely reporting. The visit was
              a success, leaving a lasting impression on the students and
              teachers, and reinforcing our commitment to combating human
              trafficking through education and awareness.{" "}
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6 ">
          <div className={`${styles.inDiv} col`}>
            <img src={chloe} alt="event" className="img-fluid" />
          </div>

          <div className={`${styles.innerDiv} col`}>
            <h5>Visitation to House of Chloe Orphanage Home</h5>
            <p>
              <i>Monday, December 16th 2024</i>
            </p>

            <p>
              {" "}
              The sensitization programme held at the House of Chloe Orphanage
              Home on December 16, 2024, was a resounding success. Organized by
              the following community development service groups (CDS), National
              Agency for the Prohibition of Trafficking in Persons (NAPTIP),
              Medical and Health, Sanitation, and Education. <br /> The
              sensitization aimed to demonstrate care and compassion for
              vulnerable orphans by providing essential needs and promoting
              their well-being and quality of life during this festive period.{" "}
              <br />
              The sensitization programme successfully achieved its objective,
              showcasing the collective effort of the corps members to support
              vulnerable people. This initiative highlighted the importance of
              inter community development service collaboration and community
              engagement. The members of staffs of the orphanage home gladly
              accepted the gifts and appreciated the volunteers for the
              hospitality shown.
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6 ">
          <div className={`${styles.inDiv} col`}>
            <img src={ayangburen} alt="event" className="img-fluid" />
          </div>

          <div className={`${styles.innerDiv} col`}>
            <h5>Visitation to Ayangburen Secondary School</h5>
            <p>
              <i>Tuesday, January 21st 2025</i>
            </p>

            <p>
              The NAPTIP CDS group's visitation to Ayangburen Public Secondary
              School, Ikorodu, was a significant initiative aimed at educating
              students on the dangers of human trafficking and the importance of
              vigilance in safeguarding their futures. As part of the group's
              commitment to community awareness, corps members engaged the
              students in an interactive session, providing them with valuable
              insights into recognizing, preventing, and reporting
              trafficking-related activities. The students showed great
              enthusiasm, actively participating in discussions and asking
              thought-provoking questions. The corps members also distributed
              educational materials to reinforce the lessons shared during the
              session. The school authorities expressed their gratitude for the
              impactful visit, acknowledging the importance of such
              sensitization programs in equipping young minds with the knowledge
              and confidence to protect themselves and their peers. This
              outreach reaffirmed the NAPTIP CDS group's dedication to combating
              human trafficking through education and community engagement.
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-lg-6 ">
          <div className={`${styles.inDiv} col`}>
            <img src={market} alt="event" className="img-fluid" />
          </div>

          <div className={`${styles.innerDiv} col`}>
            <h5>Visitation to Sabo and Ladega Market</h5>
            <p>
              <i>Tuesday, February 18th 2025</i>
            </p>

            <p>
              The NAPTIP CDS group carried out a sensitization outreach at Sabo
              and Ladega Market in Ikorodu, engaging traders, buyers, and the
              general public on the dangers of human trafficking and the need
              for vigilance in their communities. This initiative aimed to raise
              awareness about trafficking tactics, victim identification, and
              the importance of reporting suspicious activities. During the
              outreach, corps members interacted directly with market women,
              shop owners, and passersby, sharing informative pamphlets and
              engaging in meaningful conversations about how human traffickers
              often operate under the guise of employment opportunities. The
              session also emphasized the role of the community in preventing
              exploitation and protecting vulnerable individuals. The market
              leaders and traders welcomed the sensitization program, expressing
              appreciation for the enlightenment and pledging to remain vigilant
              against trafficking-related activities. This outreach reinforced
              the NAPTIP CDS group's commitment to grassroots advocacy and
              community engagement in the fight against human trafficking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
