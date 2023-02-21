import { Parallax } from "react-scroll-parallax";
import "./InfoCard.css";

function InfoCard({ title, divider, children, smallPadding, border }) {
  return (
    <div
      className={`info-card ${divider ? "divider" : ""} ${
        smallPadding ? "small-padding" : ""
      } ${border ? "border" : ""}`}
    >
      <Parallax speed={4} scale={[0.95, 1]} opacity={[0.65, 1]}>
        <h3 class="info-card-title main-l">{title}</h3>
      </Parallax>
      <div className="info-card-content">{children}</div>
    </div>
  );
}

export default InfoCard;
