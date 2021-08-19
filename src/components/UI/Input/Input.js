import { FORM_AREA_CODE } from "../../../Utilities/textForApp";
import classes from "./Input.module.css";

const Input = ({
  type,
  value,
  changed,
  placeholder,
  invalid,
  touched,
}) => {
  const options = ["050", "053", "052", "054", "055", "058"];
  
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (invalid && touched) {
    inputClasses.push(classes.Invalid);
  }
  if (type === "number") {
    inputClasses.push(classes.Phone);
  }
  if (type === "select") {
    inputClasses.push(classes.AreaCode);
  }

  const blockInvalidChar = e => {
    if(type === 'number'){
      ['e', 'E', '+', '-'].includes(e.key)&& e.preventDefault() 
    }
  };

  switch (type) {
    case "text":
    case "number":
    case "email":
      inputElement = (
        <input
          type={type}
          value={value}
          onChange={changed}
          className={inputClasses.join(" ")}
          placeholder={placeholder}
          onKeyDown={blockInvalidChar}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          defaultValue="default"
          onChange={changed}
          className={inputClasses.join(" ")}
        >
          <option
            value="default"
            disabled
            hidden
          >
            {FORM_AREA_CODE}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
      break;
  }

  return inputElement;
};

export default Input;

