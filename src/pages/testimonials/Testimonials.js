import arrowRightImg from "../../assets/right-arrow.png";
import youtubeImg from "../../assets/youtube.png";
import twitterImg from "../../assets/twitter.png";
import linkedinImg from "../../assets/linkedin.png";
import Slider from "react-slick";
import { settingsTwo } from "../../components/slickSliderSettings";
import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: twitterImg,
      icon2: linkedinImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: twitterImg,
      icon2: linkedinImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: twitterImg,
      icon2: linkedinImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials">
      <div className="in-testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          <Slider {...settingsTwo}>
            {data.map((d) => (
              <div className="sliderCon">
                <div className={d.featured ? "card featured" : "card"}>
                  <div className="top">
                    <a href="#">
                      <img src={d.icon} alt="arrowRightImg" className="left" />
                    </a>

                    <img src={d.img} alt="dimg" className="user" />
                    <a href="#">
                      <img className="right" src={d.icon2} alt="dicon" />
                    </a>
                  </div>
                  <div className="center">{d.desc}</div>
                  <div className="bottom">
                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>
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
