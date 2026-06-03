import {
  FaApple,
  FaMicrosoft,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import "./marquee.css";

const logos = [
  { icon: <SiCoursera size={28} />, name: "Coursera" },
  { icon: <FaApple size={28} />, name: "Apple" },
  { icon: <FaMicrosoft size={28} />, name: "Microsoft" },
  { icon: <FaGithub size={28} />, name: "Github" },
  { icon: <FaGoogle size={28} />, name: "Google" },
  { icon: <SiCoursera size={28} />, name: "Coursera" },
  { icon: <FaApple size={28} />, name: "Apple" },
  { icon: <FaMicrosoft size={28} />, name: "Microsoft" },
  { icon: <FaGithub size={28} />, name: "Github" },
  { icon: <FaGoogle size={28} />, name: "Google" },
];

export default function LogoMarquee() {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...logos, ...logos].map((item, i) => (
          <div key={i} className="marquee-item">
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
