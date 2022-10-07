import { useRef, useState } from "react";
import shakeSvg from "../../assets/contact.png";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const submitForm = (e) => {
    e.preventDefault();
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setError("");
    if (inputText.fullName === "") {
      setError(true);
      setError("Full name is required!");
    } else if (inputText.email === "") {
      setError(true);
      setError("Email is required!");
    } else if (!emailPattern.test(inputText.email)) {
      setError(true);
      setError("Email address is invalid!");
    } else if (inputText.subject === "") {
      setError(true);
      setError("Subject is required");
    } else if (inputText.message === "") {
      setError(true);
      setError("Message cannot be empty");
    } else if (inputText.message.length <= 149) {
      setError(true);
      setError("Message too short! it must be at least 150 characters long.");
    } else {
      setMessage(true);
      sendEmail();
    }
  };
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInputText((oldvalues) => {
      console.log(oldvalues);
      return {
        ...oldvalues,
        [name]: value,
      };
    });
  };

  const form = useRef();

  return (
    <div className="contact">
      <div className="in-contact">
        <div className="left">
          <img src={shakeSvg} alt="shakeSvg" />
        </div>
        <div className="right">
          <h2>Hire Me.</h2>
          <p>I promise to get back as soon as possible :)</p>
          <form ref={form} onSubmit={submitForm}>
            <span className={"errorMsg " + (error && "errorMsgOpen")}>
              {error}
            </span>
            <input
              className="inputField"
              type="text"
              name="fullName"
              value={inputText.fullName}
              onChange={inputEvent}
              placeholder="Full Name"
            />
            <input
              className="inputField"
              type="text"
              name="email"
              value={inputText.email}
              onChange={inputEvent}
              placeholder="Email Address"
            />
            <input
              className="inputField"
              type="text"
              name="subject"
              value={inputText.subject}
              onChange={inputEvent}
              placeholder="Subject"
            />
            <textarea
              name="message"
              value={inputText.message}
              onChange={inputEvent}
              placeholder="Message"
            ></textarea>
            <input type="submit" className="submitBtn" value="Hire Me" />
            <div className={"overlay " + (message && "overlayAnime")}>
              <div className="successMsg">
                <CloseIcon
                  className="closeIcon"
                  onClick={() => setMessage(false)}
                />
                Thanks, I'll reply ASAP :)
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
