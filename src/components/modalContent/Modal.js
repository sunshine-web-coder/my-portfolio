import Person3Icon from "@mui/icons-material/Person3";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import MoodIcon from "@mui/icons-material/Mood";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./modal.scss";

export default function Modal({ setOpenFile }) {
  return (
    <div className="readMoreModalBox">
      <CloseIcon className="closeIcon" onClick={() => setOpenFile(false)} />
      <div className="in-readMoreModalBox">
        <div className="NMnh">
          <div className="name">
            <h1>FAJUYAGBE EZEKIEL</h1>
            <p>Front End Developer (ReactJs) </p>
          </div>
          <hr />
          <div className="profile">
            <div className="title">
              <h3>
                <Person3Icon /> Profile
              </h3>
            </div>
            <p>
              Independent Front End Developer with 3+ years of experience in
              blending the art of design with skill of programming to deliver an
              immersive, responsive and engaging user experience through
              efficient website development, proactive feature optimization, and
              relentless debugging.
            </p>
          </div>
          <hr />
          <div className="njdhuY">
            <div className="title">
              <h3>
                <BadgeIcon /> Employment History
              </h3>
            </div>
            <div style={{ marginBottom: 20 }}>
              <strong>Web Developer at Vince Chain, Remotely</strong>
              <p className="date">June 2021 — Till Date</p>
              <p>
                I use my web development skills to build pleasant and easy to
                navigate websites and web applications for the clients.
              </p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <strong>Software Developer Internship at HNG, Lagos</strong>
              <p className="date">March 2020 — July 2020 </p>
              <p>
                I used my front-end development skills to help my team design
                and build two apps which include a Piggyvest interest calculator
                and a fashion blog.
              </p>
            </div>
            <div style={{ marginBottom: 20 }}>
              <strong>Software Developer Internship at Startng, Lagos</strong>
              <p className="date">September 2019 — January 2020</p>
              <ul>
                <li>Knowledge of HTML, CSS, Bootstrap.</li>
                <li>Javascript Experience</li>
                <li>Knowledge of Front-end libraries and frameworks</li>
              </ul>
            </div>
            <div style={{ marginBottom: 20 }}>
              <strong>Web Developer at QroniSwap, Remotely</strong>
              <p className="date">June 2021 — Till Date</p>
              <p>
                I use my web development skills to build pleasant and easy to
                navigate cryptocurrency landing page websites for the clients
                using HTML, CSS and ReactJs library.
              </p>
            </div>
          </div>
          <hr />
          <div className="njdhuY">
            <div className="title">
              <h3>
                <SchoolIcon /> Education
              </h3>
            </div>
            <div style={{ marginBottom: 20 }}>
              <strong>Baptist Senior High School</strong>
              <p className="date">December 2006 — October 2009</p>
            </div>
          </div>
          <hr />
          <div className="njdhuY">
            <div className="title">
              <h3>
                <LanguageIcon /> Social Links
              </h3>
            </div>
            <div style={{ marginBottom: 20 }}>
              <p className="date">Reach out to me on my social links</p>
              <div className="modalSocial">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/eaxysunshine_te"
                >
                  <TwitterIcon className="sIcon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://t.me/VGDYearst"
                >
                  <TelegramIcon className="sIcon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/fajuyagbe-ezekiel/"
                >
                  <LinkedInIcon className="sIcon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/easysunshine22"
                >
                  <GitHubIcon className="sIcon" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="njdhuY">
            <div className="title">
              <h3>
                <CodeIcon /> Skills
              </h3>
            </div>
            <ul style={{ fontSize: 16 }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>API FETCH</li>
              <li>REACT JS</li>
            </ul>
          </div>
          <hr />
          <div className="njdhuY">
            <div className="title">
              <h3>
                <MoodIcon /> Hobbies
              </h3>
            </div>
            <p>Reading, Adventure, Video Game, Movies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
