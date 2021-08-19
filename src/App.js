import MainPage from "./containers/mainPage/MainPage";
import VideoPage from "./containers/videoPage/VideoPage";
import FormPage from "./containers/formPAge/FormPage";
import "./App.css";
import { useRef } from "react";
import Footer from "./containers/Footer/Footer";

function App() {
  const form = useRef(null);

  const executeScroll = () =>
    form.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <header className="AppHeader"><div className={'headerDiv'}></div></header>
      <MainPage onScroll={executeScroll} />
      <VideoPage />
      <FormPage ref={form} />
      <Footer/>
    </div>
  );
}

export default App;
