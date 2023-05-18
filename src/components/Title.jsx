import "../Css/Title.css";
import logo from "../calculator/assets/logo.svg"
function Title({id}) {
  return (
    <div className="logoflex" id={id}>
      <img src={logo} alt="not available" />
      <div className="logoname">devexpo</div>
    </div>
  );
}
export default Title;
