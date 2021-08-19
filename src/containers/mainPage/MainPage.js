import "./MainPage.css";
import * as texts from "../../Utilities/textForApp";
import Button from '../../components/UI/Button/Button';
import DogImg from "../../components/images/DogImg";

const MainPage = ({onScroll}) => {

const btnClicked = () =>{

}

  return (
    <div className="mainPage">
      <div className="dogImg">
        <DogImg />
      </div>
      <div className="content">
        <h2>{texts.MAIN_H2}</h2>
        <p>{texts.MAIN_P}</p>
        <Button text={texts.MAIN_BTN} clicked={onScroll} type="adoptNow" />
      </div>
    </div>
  );
};

export default MainPage;
