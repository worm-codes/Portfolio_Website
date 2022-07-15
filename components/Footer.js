
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 Oguzhan</p>
    </div>
  );
}

export default Footer;
