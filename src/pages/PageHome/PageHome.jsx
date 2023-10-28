import "./PageHome.scss";
import { useNavigate } from "react-router-dom";

function PageHome() {
  const navigate = useNavigate();
  return <div styleName="home">Главная страница</div>;
}

export default PageHome;
