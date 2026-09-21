function SignUp() {
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
  }
  return (
    <>
      <h1>Sign Up</h1>
      <form method="post" onSubmit={handleFormSubmit}>
        <p>
          <label>Username:</label>
          <input type="text" name="username" id="username" />
        </p>
        <p>
          <label>Password:</label>
          <input type="password" name="password" id="password" />
        </p>
        <p>
          <input type="submit" value="SignUp" />
        </p>
      </form>
    </>
  );
}

export default SignUp;
