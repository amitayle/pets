import "./FormPage.css";
import * as texts from "../../Utilities/textForApp";
import Button from "../../components/UI/Button/Button";
import { useState, forwardRef, useEffect } from "react";
import UserDetailsForm from "./UserDetailsForm/UserDetailsForm";
import CheckBox from "../../components/UI/Input/CheckBox";

const FormPage = (props, ref) => {
  const [agreeIsChecked, setAgreeIsChecked] = useState(false);
  const [intrestedIsChecked, setIntrestedIsChecked] = useState(true);
  const [formUserDetails, setFormUserDetails] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [allowToSend, setAllowToSend] = useState(false);


  // post the data to server
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formUserDetails);
  };

  const checkBoxes = (
    <>
      <CheckBox
        name="agree"
        type="checkbox"
        label={texts.FORM_CHECK_BOX_1}
        value={agreeIsChecked}
        onCheckboxChange={() => { setAgreeIsChecked(!agreeIsChecked); checkFormValidity()}}
      />
      <CheckBox
        name="intrested"
        type="checkbox"
        label={texts.FORM_CHECK_BOX_2}
        value={intrestedIsChecked}
        onCheckboxChange={() => setIntrestedIsChecked(!intrestedIsChecked)}
      />
    </>
  );

  //get the user data and  the validity of the form 
  const getUserDetails = (userDetails, formIsValid) => {
    setFormUserDetails(userDetails);
    setFormIsValid(formIsValid);
    console.log(11, formIsValid);

    checkFormValidity()
  };
  
  // get the validity of the form and check if the user agree to 
  //  For conditions
  const checkFormValidity = () =>{
    const allowToSend = formIsValid && agreeIsChecked
    setAllowToSend(allowToSend);
  }

  useEffect(() => {
    checkFormValidity()
    
  }, [formIsValid,agreeIsChecked])
  

  return (
    <div className="formPage" ref={ref} >
      <h2>{texts.FORM_H2}</h2>
      <form>
        <div className="textInputs">
          <UserDetailsForm userFormDetails={getUserDetails}/>
        </div>
        <div className="checkBoxes">
          {checkBoxes}
          <Button
            text={texts.FORM_BTN}
            clicked={onSubmit}
            type="send"
            disable={!allowToSend}
          />
        </div>
      </form>
    </div>
  );
};

export default forwardRef(FormPage);
