import Person3Icon from '@mui/icons-material/Person3';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./topBar.scss";

export default function TopBar() {
  return (
    <div className="TopBar">
      <div className="left">
        <span><Person3Icon /> +2349079709430</span>
        <span><EmailIcon /> eaxy@gmail.com</span>
      </div>
      <div className="right">
        <TwitterIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
    </div>
  );
}
