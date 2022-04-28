const StepTwo = (props) => {
  return (
    <div className={props.connector === true ? "inactive" : "active steptwo"}>
      <div>
        <div className="result">
          <span>Name</span>
          <span>{props.name}</span>
        </div>
        <div className="result">
          <span>Email</span>
          <span>{props.email}</span>
        </div>
        <div className="result">
          <span>Password</span>
          <span>{props.password}</span>
        </div>
      </div>

      <div>Edit your information</div>
    </div>
  );
};
export default StepTwo;
