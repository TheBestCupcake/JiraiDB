function SignUp() {
  return (
    <>
      <h1>Sign Up</h1>
      <form method="post">
        <p>
          <label>Username:</label>
          <input type="text" name="username" id="username" />
        </p>
        <p>
          <label>Password:</label>
          <input type="password" name="password" id="password" />
        </p>
        <p>
          <input type="submit" value="Login" />
        </p>
      </form>
    </>
  );
}

export default SignUp;
