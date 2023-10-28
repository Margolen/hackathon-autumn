import "./PageHome.scss";
import { useNavigate } from "react-router-dom";

function PageHome() {
  const navigate = useNavigate();
  return (
    <div styleName="home">
      <h1>Проверь свою подготовку к собеседованию в области IT!</h1>
      <img src="img/home.png" alt="" />
    </div>
  );
}

export default PageHome;
