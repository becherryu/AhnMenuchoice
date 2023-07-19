import { useNavigate } from "react-router-dom";
import "../component/Korean.css";
import asian from "../img/asian.png";

const Asian = () => {
  const navigate = useNavigate();
  return (
    <div className="test">
      <div className="title">
        <img src={asian} />
        <h2>아시안</h2>
      </div>
      <div className="btn">
        <button>중식</button>
        <button>일식</button>
        <button>쌀국수</button>
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

export default Asian;
