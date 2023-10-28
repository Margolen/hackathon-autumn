import { useNavigate } from "react-router-dom";
import "./PageFlashCard.scss";

function Home() {
  const navigate = useNavigate();
  return (
    <div styleName="home">
      <img src="img/flag.png" alt="" />
    </div>
  );
}
