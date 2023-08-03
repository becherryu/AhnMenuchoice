import { useNavigate, Link } from "react-router-dom";
import "../component/Korean.css";
import korean from "../img/korean.png";

const Korean = () => {
  let kn = -1;
  const navigate = useNavigate();
  return (
    <div className="test">
      <div className="title">
        <img src={korean} />
        <h2>한식</h2>
      </div>
      <div className="btn">
        <Link to="/resultpage">
          <button {...(kn = 0)}>밥</button>
        </Link>
        <Link to="/resultpage">
          <button {...(kn = 1)}>면</button>
        </Link>
        <Link to="/resultpage">
          <button {...(kn = 2)}>분식</button>
        </Link>
        <Link to="/resultpage">
          <button {...(kn = 3)}>고기</button>
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

export default Korean;
