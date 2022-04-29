const StepTwo = (props) => {
  return (
    <div className={props.connector === false ? "inactive" : "active steptwo"}>
      <div>
        <div className="result">
          <span>Name:</span>
          <span>{props.username}</span>
        </div>
        <div className="result">
          <span>Email:</span>
          <span>{props.email}</span>
        </div>
        <div className="result">
          <span>Password:</span>
          <span>{props.password}</span>
        </div>
      </div>

      <div>
        <input
          className="valid-bt"
          type="submit"
          value="Edit your information"
        />
      </div>
    </div>
  );
};
export default StepTwo;
