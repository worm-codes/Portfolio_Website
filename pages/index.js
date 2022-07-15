
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.about}>
        <h2> Hi, My Name is Oğuzhan</h2>
        <div className={styles.prompt}>
          <p>A Full-Stack developer, deploying web applications from scratch, and selecting the technologies most suitable for each project.</p>
          
          <a target="_newblank" href="https://www.linkedin.com/in/oguzhancevikk/"><LinkedInIcon /></a> 
          <a target="_newblank" href="mailto: oguzhan0553283@gmail.com"><EmailIcon /></a>
         <a target="_newblank" href="https://github.com/worm-codes"><GithubIcon /></a> 
        </div>
      </div>
      <div className={styles.skills}>
        <h1> Skills</h1>
        <ol className={styles.list}>
          <li className={styles.item}>
            <h2> Front-End</h2>
            <span>
              ReactJS, ContextAPI, HTML5, CSS3, NPM,
               BootStrap, MaterialUI, NextJS
            </span>
          </li>
          <li className={styles.item}>
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, MongoDB, Socket.IO
            </span>
          </li>
          <li className={styles.item}>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
