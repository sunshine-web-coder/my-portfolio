import mobileImg from "../../assets/mobile.png";
import globeImg from "../../assets/globe.png";
import writingImg from "../../assets/writing.png";
import wksImg from "../../assets/wks.jpg";
import "./works.scss";
import Slider from "react-slick";
import { settings } from "../../components/slickSliderSettings";
import "./works.scss";

export default function Works() {

  const data = [
    {
      id: "1",
      icon: mobileImg,
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: globeImg,
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: writingImg,
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  return (
    <div className="works">
      <div className="in-works">
        <div className="title">
          <h1>Works</h1>
        </div>
        <div className="slider">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="workSlider">
                <div className="in-workSlider">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={d.icon} alt="mobileImg" />
                      </div>
                      <h2>{d.title}</h2>
                      <p>{d.desc}</p>
                      <span>Projects</span>
                    </div>
                  </div>
                  <div className="right">
                    <img src={wksImg} alt="wksImg" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
