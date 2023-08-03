import { useNavigate, Link } from "react-router-dom";
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
        <Link to="/resultpage">
          <button>샐러드</button>
        </Link>
        <Link to="/resultpage">
          <button>요거트</button>
        </Link>
        <Link to="/resultpage">
          <button>샌드위치</button>
        </Link>
        <Link to="/resultpage">
          <button>기타</button>
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

export default Brunch;
