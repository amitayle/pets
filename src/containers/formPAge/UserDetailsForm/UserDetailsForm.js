import React, { useState } from "react";
import * as texts from "../../../Utilities/textForApp";
import Input from "../../../components/UI/Input/Input";
import { checkValidity } from "../../../Utilities/CheckValidity";

const UserDetailsForm = ({ userFormDetails }) => {
  const [userFormElements, setUserFormElements] = useState({
    firstName: {
      type: "text",
      placeholder: texts.FORM_FIRST_NAME,
      value: "",
      validation: {
        requird: true,
        minLength: 3,
        maxLength: 17,
        isName: true
      },
      valid: false,
      touched: false,
    },
    lastName: {
      type: "text",
      placeholder: texts.FORM_LAST_NAME,
      value: "",
      validation: {
        requird: true,
        minLength: 3,
        maxLength: 17,
        isName: true
      },
      valid: false,
      touched: false,
    },
    phone: {
      type: "number",
      placeholder: texts.FORM_PHONE,
      value: "",
      validation: {
        requird: true,
        isNumeric: true,
        minLength: 7,
        maxLength: 7,
      },
      valid: false,
      touched: false,
    },
    areaCode: {
      type: "select",
      placeholder: texts.FORM_AREA_CODE,
      value: "",
      validation: {
        requird: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      type: "email",
      placeholder: texts.FORM_EMAIL,
      value: "",
      validation: {
        requird: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
   //need to add autoComplite google maps
    address: {
      type: "text",
      placeholder: texts.FORM_ADDRESS,
      value: "",
      validation: {
        requird: true,
        isAddress: true
      },
      valid: false,
      touched: false,
    },
    //need to add autoComplite google maps
    city: {
      type: "text",
      placeholder: texts.FORM_CITY,
      value: "",
      validation: {
        requird: true,
        isAddress: true
      },
      valid: false,
      touched: false,
    },
  });

  const inputChangeHandler = (event, inputKey) => {
    const updateUserFormElemelts = { ...userFormElements };
    const updateElement = { ...updateUserFormElemelts[inputKey] };
    updateElement.value = event.target.value;
    updateElement.touched = true;
    //check the value validity
    updateElement.valid = checkValidity(
      updateElement.value,
      updateElement.validation
    );
    updateUserFormElemelts[inputKey] = updateElement;
    
    //check the form validity 
    let validationOfForm = true;
    for (let inputKey in updateUserFormElemelts) {
      validationOfForm =
        updateUserFormElemelts[inputKey].valid && validationOfForm;
    }
    setUserFormElements(updateUserFormElemelts);
    userFormDetails(updateUserFormElemelts, validationOfForm)
    
  };
  
  //make array of the elements
  const formElementArrey = [];
  for (let key in userFormElements) {
    formElementArrey.push({ key: key, element: userFormElements[key] });
  }

  const allFormElements = formElementArrey.map((item) => {
    return (
        <Input
          key={item.key}
          type={item.element.type}
          value={item.element.value}
          placeholder={item.element.placeholder}
          changed={(event) => inputChangeHandler(event, item.key)}
          touched={item.element.touched}
          invalid={!item.element.valid}
        />
    );
  });

  return <>{allFormElements}</>;
};

export default UserDetailsForm;
