const apiURL = "http://localhost:3000";

export const login = (username: string, password: string) => {
  fetch(`${apiURL}/login`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ username: username, password: password }),
  });
};
