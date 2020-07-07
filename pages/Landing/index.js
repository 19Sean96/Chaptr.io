import TitleSVG from "../../assets/svg/chaptr-title.svg";
import TitleShadowSVG from "../../assets/svg/chaptr-title-shadow.svg";
import "./styles.scss";
export default function Landing() {
  return (
    <header>
      <div className="title__container">
        <TitleSVG className="title" />
        <TitleShadowSVG className="title--shadow" />
      </div>

      <div className="top-row">
        <h6 className="top-row--left">
          <span>issue:</span> 00_july2020
          <div className="rect"></div>
        </h6>
        <h6 className="top-row--right">
          subversion <div className="rect"></div>
        </h6>
      </div>

      <div className="chapter">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <span>zero</span>
        ))}
      </div>

      <div className="bottom-row">
        <p className="bottom-row--left">
          opinionated journal exploring innovative art
        </p>
        <div className="bottom-row--right">
        <p className="start">topics</p>
          <ul className="list-container">
            <li>0.0 intro</li>
            <li>0.1 basquiat</li>
            <li>0.2 suprematism</li>
            <li>0.3 louise bourgeois</li>
            <li>0.4 ai</li>
          </ul>
          <p className="end">end</p>
        </div>
      </div>
          <div className="circle"></div>
    </header>
  );
}
