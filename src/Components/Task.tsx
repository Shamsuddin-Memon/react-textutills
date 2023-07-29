function LoginForm() {
  return (
    <>
      <div className="Box">
        <div className="Form-box">
          <h2>Login Form</h2>
          <br />
          <br />
          <label htmlFor="username"></label>
          <input id="username" type="text" placeholder="Enter username" />

          <br />
          <br />
          <label htmlFor="Pass"> </label>
          <input id="Pass" type="text" placeholder="Enter password" />

          <br />
          <br />

          <button className="Submit">Sign in</button>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
