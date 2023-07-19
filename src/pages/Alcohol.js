import { useNavigate } from "react-router-dom";
import "../component/Alcohol.css";
import alcohol from "../img/alcohol.png";

const Alcohol = () => {
  const navigate = useNavigate();
  return (
    <div className="alcohol">
      <div className="title">
        <img src={alcohol} />
        <h2>술집</h2>
      </div>
      <div className="abtn">
        <button>1차</button>
        <button>2차</button>
      </div>
      <button
        id="back"
        onClick={() => {
          navigate("/test");
        }}
      >
        돌아가기
      </button>
    </div>
  );
};

export default Alcohol;
