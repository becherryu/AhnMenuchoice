import { useNavigate } from "react-router-dom";
import "../component/Test.css";
import western from "../img/western.png";

const Western = () => {
  const navigate = useNavigate();
  return (
    <div className="test">
      <div className="title">
        <img src={western} />
        <h2>양식</h2>
      </div>
      <div className="btn">
        <button>밥</button>
        <button>빵</button>
        <button>면</button>
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

export default Western;
