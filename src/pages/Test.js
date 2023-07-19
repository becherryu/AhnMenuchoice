import noonsong from "../img/noonsong.png";
import { useNavigate } from "react-router-dom";
import "../component/Test.css";

const Test = () => {
  const navigate = useNavigate();
  return (
    <div className="test">
      <h2>여러분의 취향에 맞춰 테스트를 진행해 주세요</h2>
      <div className="btn">
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            navigate("/korean");
          }}
        >
          한식
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            navigate("/asian");
          }}
        >
          아시안
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            navigate("/western");
          }}
        >
          양식
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            navigate("/alcohol");
          }}
        >
          술집
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            navigate("/dessert");
          }}
        >
          디저트
        </button>
        <button
          style={{ backgroundColor: "#9bb9da" }}
          onClick={() => {
            navigate("/brunch");
          }}
        >
          브런치
        </button>
      </div>
      <img src={noonsong} width={450} />
    </div>
  );
};

export default Test;
