import { login } from "../utils/loginServices";

function Login() {
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    login(username, password);
  }
  return (
    <>
      <h1>Login</h1>
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
          <input type="submit" value="Login" />
        </p>
      </form>
    </>
  );
}

export default Login;
