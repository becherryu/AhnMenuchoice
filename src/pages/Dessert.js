import { useNavigate, Link } from "react-router-dom";
import "../component/Alcohol.css";
import dessert from "../img/dessert.png";

const Dessert = () => {
  const navigate = useNavigate();
  return (
    <div className="alcohol">
      <div className="title">
        <img src={dessert} />
        <h2>디저트</h2>
      </div>
      <div className="abtn">
        <Link to="/resultpage">
          <button>테이크아웃</button>
        </Link>
        <Link to="/resultpage">
          <button>좌석O</button>
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

export default Dessert;
