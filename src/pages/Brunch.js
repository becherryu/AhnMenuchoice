import { useNavigate } from "react-router-dom";
import "../component/Test.css";
import brunch from "../img/brunch.png";

const Brunch = () => {
  const navigate = useNavigate();
  return (
    <div className="test">
      <div className="title">
        <img src={brunch} />
        <h2>브런치</h2>
      </div>
      <div className="btn">
        <button>샐러드</button>
        <button>요거트</button>
        <button>샌드위치</button>
        <button id="sm"></button>
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

export default Brunch;
