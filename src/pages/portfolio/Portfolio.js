import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
// import PortfolioList from "../../components/portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected] = useState("featured");
  const [data, setData] = useState([]);

  // const list = [
  //   {
  //     id: "featured",
  //     title: "Featured",
  //   },
  //   {
  //     id: "web",
  //     title: "Web App",
  //   },
  //   {
  //     id: "mobile",
  //     title: "Mobile App",
  //   },
  //   {
  //     id: "design",
  //     title: "Design",
  //   },
  //   {
  //     id: "content",
  //     title: "Content",
  //   },
  // ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio">
      <div className="in-Portfolio">
        <div className="title">
          <h1>Portfolio</h1>
        </div>
        {/* 
          <ul>
            {list.map((item) => (
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul> */}
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
              <h3>
                {d.title} <br />
                <a target="_blank" rel="noreferrer" href={d.url}>
                  {d.icon}
                </a>
                <p>{d.tool} Project</p>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
