import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import styles from '../../styles/experience.module.css';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 Sep - 2018 Jan"
            iconStyle={{ background: 'black', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <a
                target="_newblank"
                href="https://en.mcbu.edu.tr/"
              >
                Manisa Celal Bayar University
              </a>{' '}
              , Manisa/Turkey
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              English Preparation School
            </h4>
            <p>
              My department was %100 English so I had to take this class that
              lasts 2 terms. I passed the exam in January(first term) and I took
              a break from school to find what I want.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 Sep - 2022 Jul"
            iconStyle={{ background: 'black', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <a
                target="_newblank"
                href="https://en.mcbu.edu.tr/"
              >
                Manisa Celal Bayar University
              </a>{' '}
              , Manisa/Turkey
            </h3>
            <p> Computer Engineering (%100 English) GPA:3.37/4</p>
            <div style={{ marginTop: '10px' }}>
              {' '}
              <b>Social Activites:</b>
              <li>
                Vice Chair of <span></span>
                <a
                  target="_newblank"
                  href="https://ieee.mcbu.edu.tr/en/mcbu.php"
                >
                  IEEE MCBU
                </a>{' '}
                Computer Society
              </li>
              <li>
                Chair of{' '}
                <a
                  target="_newblank"
                  href="https://ieee.mcbu.edu.tr/en/mcbu.php"
                >
                  IEEE MCBU
                </a>{' '}
                Computer Society
              </li>
              <li>
                {' '}
                <a
                  target="_newblank"
                  href="https://youtu.be/kKs4-U6iooo?t=6316"
                >
                  ArTek 21 Event
                </a>{' '}
                Coordinator
              </li>
              <li>IEEE Member</li>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 Oct - "
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">90Pixel</h4>
            <p>
              Creating portal projects for customers , Developing new products
              based on customer needs , Converting 90Pixel products according to
              customer needs.
            </p>
            <p>
              Skills: Typescript · Redux Toolkit · React-Query · Next.js ·
              JavaScript · Styled Components · Ant Design · Agile(SCRUM) ·
              ContextAPI · GitLab · SCSS · HTML5 · CSS3 · React.js · Motion
              Library
            </p>
            <p>
              <a
                target="_newblank"
                href="https://90pixel.com/en"
              >
                More About 90Pixel &#8594;
              </a>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 Mar - 2022 Jun"
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hamdi Küçük Çelik Makina A.Ş. , IT Department
            </h4>

            <div style={{ marginTop: '10px' }}>
              Me and my Co-worker created a platform which brings people
              together who want to travel a country with their Local person.{' '}
              <pre></pre>
              <b>I was responsible for:</b>
              <li>Chat-App(Frontend and Backend)</li>
              <li>ContextAPI</li>
              <li>Profile Page (Frontend and Backend)</li>
              <li>Sign-up Page (Frontend and Backend)</li>
              <li>Sign-in Page(Frontend and Backend)</li>
              <li>
                Authentication(Firebase Auth, Protected Routes, MiddleWare)
              </li>
              <li>Password Reset Page(Frontend and Backend)</li>
              <li>
                Backend Server requests about User, Conversation and Message
              </li>
            </div>

            <p>
              Skills: React.js · Node.js · JavaScript · Socket.io · Express.js ·
              MongoDB · ContextAPI · Git · Bootstrap · Semantic UI · HTML5 ·
              CSS3
            </p>
            <p>
              <a
                target="_newblank"
                href="https://github.com/worm-codes/Graduation_Project-Local-Guide"
              >
                Source Code &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 Aug - 2020 Sep"
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer (internship)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hamdi Küçük Çelik Makina A.Ş. , IT Department
            </h4>
            <p>
              It is Summer Internship, I converted the Hamdi Kucuk ERP program
              to a Web Application.
            </p>
            <p>
              Skills: Embedded JavaScript (EJS) · Node.js · JavaScript ·
              Express.js · MongoDB · Git · Bootstrap · HTML5 · CSS3
            </p>
            <p>
              <a
                target="_newblank"
                href="https://github.com/worm-codes/ERP_Web_based_project"
              >
                Source Code &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 Nov - 2022 Jun"
            iconStyle={{ background: '#e9d35b', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Guide and Technical Support
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Manisa Celal Bayar University Ayşe Hafsa Sultan Medical History
              Museum
            </h4>
            <p>
              It was part-time school job. I was giving information to visitors
              about the museum and showing them around. in the rest of my time,
              I was checking or fixing Computers, Televisions, KIOXs, Printer
              etc.
            </p>
            <p>
              Skills: Guide · Technical Support · Help Desk Support. <br /> You
              should visit sometime, you could like it :)
            </p>
            <p>
              <a
                target="_newblank"
                href="https://goo.gl/maps/dcnFveCrxAZcGDNR7"
              >
                Location &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 May - 2020 Sep"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<AssignmentTurnedInIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Developer Bootcamp, Udemy
            </h3>

            <p>
              It was my first course about web development, so It is valuable to
              me :)
            </p>
            <p>
              <a
                target="_newblank"
                href="https://www.udemy.com/certificate/UC-67a2daa7-fc25-4afb-adf8-1ca093e9012d/"
              >
                Certificate &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 Nov - 2020 Dec"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<AssignmentTurnedInIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Turkcell Academy Preparation for the Future
            </h3>
            <p>
              It was valuable time with Turkcell workers and ecosystem. We
              learned and processed about Turkcell technologies.
            </p>

            <p>
              <a
                target="_newblank"
                href="https://drive.google.com/file/d/1GhlvbYHC54wmg83IlM5fUsHsuBYF4Xa6/view"
              >
                Certificate &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 Nov - 2021 Feb"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<AssignmentTurnedInIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development Career Path
            </h3>

            <p>
              I got an free account on Codecademy for free because of Covid
              Campaign. I tried to finish all content in 2 Month but I could.
              But, the Campaign was going on so I opened new account and
              continued to content. After all, I finished and got my certificate
              in my new account.{' '}
            </p>

            <p>
              <a
                target="_newblank"
                href="https://www.codecademy.com/profiles/oguzhancevik4056010494/certificates/5b32457b646caa5007c30975"
              >
                Certificate &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 Oct"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<AssignmentTurnedInIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Türk Telekom Cloud Computing Certificate
            </h3>

            <p>
              {' '}
              I have successfully completed the Turk Telekom Cloud Computing
              Camp, where I am one of the 50 selected among 4412 candidates. In
              this camp, which lasted for 1 week and lasted for about 20 hours,
              we gained a lot of information about Cloud Computing and listened
              to experiences from experts in the sector.
            </p>

            <p>
              <a
                target="_newblank"
                href="https://drive.google.com/file/d/1nMazl6I6GvIGfnX5sycpmNEhUaqlpyIt/view"
              >
                Certificate &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 Oct"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<AssignmentTurnedInIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Cybersecurity Awareness Trainig
            </h3>

            <p>
              In this time of high cybercrime, we must be careful about links,
              devices and environment. Amazon shared the cyber security
              awareness videos that prepared for amazon employees to the public.
              And, gave a certificate who completes all stages. I completed all
              stages and got my certificate.{' '}
            </p>

            <p>
              <a
                target="_newblank"
                href="https://drive.google.com/file/d/1m8Yt3sIo5ZDynWDl55lr_XQKI4GWhGxe/view"
              >
                Certificate &#8594;
              </a>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 Oct - 2022 Jan"
            iconStyle={{ background: 'green', color: '#fff' }}
            icon={<AssignmentTurnedInIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer Bootcamp
            </h3>

            <p>
              Full Stack Developer Bootcamp(144 hours) is about React.js,
              Node.js and Django and organized by Patika and Alotech. I was also
              chosen 40 out of 800 people for this bootcamp.{' '}
            </p>

            <p>
              <a
                target="_newblank"
                href="https://verified.cv/en/verify/20667764076707"
              >
                Certificate &#8594;
              </a>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
