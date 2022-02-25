import "./style.css";
const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="pic" />
        <div className="card_info">
          <span>{props.mtitle}</span>
          <h4>{props.mname}</h4>
          <a href={props.mlink} target="_blank">
            <button type="submit">WATCH NOW</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
