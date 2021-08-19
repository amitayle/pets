const CheckBox = ({ name, label, value, onCheckboxChange }) => {
  return (
    <div className="form-check">
      <label
        style={{ display: "block", paddingLeft: "15px", textIndent: "-18px" }}
      >
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={onCheckboxChange}
          style={{ width: "", verticalAlign: "middle" }}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
