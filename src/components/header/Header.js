import { Link, NavLink } from "react-router-dom";
import "./header.scss";

export default function Header({ menuOpen, setMenuOpen }) {
  const menuData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    // {
    //   name: "Works",
    //   path: "/works",
    // },
    // {
    //   name: "Testimonials",
    //   path: "/testimonials",
    // },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className={"header " + (menuOpen && "active")}>
      <div className="in-header">
        <div className="left">
          <div className="logo"><Link to="/">&#123;SunshineWebCoder.&#125;</Link></div>
        </div>
        <div className="right">
          <div className={"menu " + (menuOpen && "active")}>
            <nav>
              <ul>
                {menuData.map((item) => (
                  <li key={item.path} onClick={() => setMenuOpen(false)}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
