import useTypewriter from "react-typewriter-hook";
import { useEffect, useRef, useState } from "react";
import pdfD from "../../assets/cv.pdf";
import bannerImg from "../../assets/Developer-activity-bro.svg";
// import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./banner.scss";
import Modal from "../modalContent/Modal";

const MagicOcean = ["HTML", "CSS", "REACT JS"];
let index = 0;

export default function Banner() {
  const [openFile, setOpenFile] = useState(false);
  const [magicName, setMagicName] = useState("HTML");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setMagicName(MagicOcean[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [magicName]);

  return (
    <div className="banner">
      <div className="in-banner">
        <div className="left">
          <div className="wrapper">
            <div className="dHy">
              <h2>Hi &#128075;, I'm </h2>
              <h1>Fajuyagbe Ezekiel</h1>
              <h3>
                Frontend Web Developer{" "}
                <div>
                  ( <span>{name}</span> )
                </div>
              </h3>
            </div>
            <div className="downloadBox">
              <button className="readMoreBtn" onClick={() => setOpenFile(true)}>
                READ MORE..
              </button>
            </div>
            <div
              className={"readMoreModalOverlay " + (openFile && "overlayAnime")}
            >
              <Modal setOpenFile={setOpenFile} />
            </div>
            <div className="socialBanner">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/eaxysunshine_te"
              >
                <TwitterIcon />
              </a>
              <a target="_blank" rel="noreferrer" href="https://t.me/VGDYearst">
                <TelegramIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/fajuyagbe-ezekiel/"
              >
                <LinkedInIcon />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/easysunshine22"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
