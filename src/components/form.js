const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPass,
  setConfirmPass,

  setTiggerSwitch,
}) => {
  // console.log(`line 11 --username: ${username}`);
  return (
    <div>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          if (password !== confirmPass) {
            alert("Vos deux mots de passe ne sont pas identique!");
          } else {
            setTiggerSwitch(true);
          }
        }}
      >
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            placeholder="username"
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            name="email"
            placeholder="email"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            name="password"
            placeholder="password"
            type="text"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input
            name="confirmpassword"
            placeholder="confirm your password"
            type="text"
            onChange={(event) => {
              setConfirmPass(event.target.value);
            }}
            value={confirmPass}
          />
        </div>
        <input className="valid-bt" type="submit" value="Register" />
      </form>
    </div>
  );
};
export default Form;
