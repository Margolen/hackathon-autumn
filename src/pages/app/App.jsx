import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import PageHome from "../PageHome/PageHome";
import PageFlashCard from "../PageFlashCard/PageFlashCard";
import PageQuiz from "../PageQuiz/PageQuiz";

import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<PageHome />}></Route>
            <Route path="/training" element={<PageFlashCard />}></Route>
            <Route path="/challenge" element={<PageQuiz />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
