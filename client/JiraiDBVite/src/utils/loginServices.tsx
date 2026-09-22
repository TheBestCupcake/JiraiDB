const apiURL = "http://localhost:3000";

export const login = async (username: string, password: string) => {
  const response = await fetch(`${apiURL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  if (response.ok) {
    console.log(data.message);
  }

  return data;
};

export const logout = async () => {
  const response = await fetch(`${apiURL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  if (response.ok) {
    console.log(data.message);
  }

  return data;
};

export const signUp = async (username: string, password: string) => {
  const response = await fetch(`${apiURL}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  if (response.ok) {
    console.log(data.message);
  }

  return data;
};
