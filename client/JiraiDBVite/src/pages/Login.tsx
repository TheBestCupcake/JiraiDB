import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../utils/loginServices";

type loginResult = {
  success: boolean;
  message: string;
};

function Login() {
  const navigate = useNavigate();

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const result = await login(username, password);

    if (result) {
      console.log("redirecting");
      navigate("/");
    }
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
