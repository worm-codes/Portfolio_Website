
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
       <a target="_newblank" href="https://www.instagram.com/oquzzzzz/"><InstagramIcon /></a> 
        <a target="_newblank" href="https://github.com/worm-codes"><GitHubIcon/></a> 
        <a target="_newblank" href="https://www.linkedin.com/in/oguzhancevikk/"><LinkedInIcon /></a> 
      </div>
      <p> &copy; 2022 Oguzhan</p>
    </div>
  );
}

export default Footer;
