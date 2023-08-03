import { useNavigate, Link } from "react-router-dom";
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
        <Link to="/resultpage">
          <button>중식</button>
        </Link>
        <Link to="/resultpage">
          <button>일식</button>
        </Link>
        <Link to="/resultpage">
          <button>베트남</button>
        </Link>
        <Link to="/resultpage">
          <button>인도</button>
        </Link>
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
