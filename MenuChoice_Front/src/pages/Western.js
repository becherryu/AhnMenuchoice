import { useNavigate, Link } from "react-router-dom";
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
        <Link to="/resultpage">
          <button>밥</button>
        </Link>
        <Link to="/resultpage">
          <button>빵</button>
        </Link>
        <Link to="/resultpage">
          <button>면</button>
        </Link>
        <Link to="/resultpage">
          <button>고기</button>
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

export default Western;
