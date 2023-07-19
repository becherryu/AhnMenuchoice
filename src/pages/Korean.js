import { useNavigate } from "react-router-dom";
import "../component/Korean.css";
import korean from "../img/korean.png";

const Korean = () => {
  const navigate = useNavigate();
  return (
    <div className="test">
      <div className="title">
        <img src={korean} />
        <h2>한식</h2>
      </div>
      <div className="btn">
        <button>밥</button>
        <button>면</button>
        <button>분식</button>
        <button>고기</button>
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

export default Korean;
