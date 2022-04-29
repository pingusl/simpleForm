const StepTwo = ({ username, email, password, setTiggerSwitch }) => {
  return (
    <div>
      <div>
        <div className="result">
          <span>Name:</span>
          <span>{username}</span>
        </div>
        <div className="result">
          <span>Email:</span>
          <span>{email}</span>
        </div>
        <div className="result">
          <span>Password:</span>
          <span>{password}</span>
        </div>
      </div>

      <div>
        <input
          className="valid-bt"
          type="submit"
          value="Edit your information"
          onClick={(event) => {
            event.preventDefault();
            setTiggerSwitch(false);
          }}
        />
      </div>
    </div>
  );
};
export default StepTwo;
