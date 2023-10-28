import "./PageHome.scss";
import { useNavigate } from "react-router-dom";

function PageHome() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1 className="page-home-title">Проверь свою подготовку к собеседованию в области IT!</h1>
      <img src="img/home.png" alt="" className="page-home-img"/>
    </div>
  );
}

export default PageHome;
