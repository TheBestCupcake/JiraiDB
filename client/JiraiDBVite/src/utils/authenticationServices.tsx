const apiURL = "http://localhost:3000";

export const isAuthenticated = async () => {
  const response = await fetch(`${apiURL}/Clothes/upload`, {
    credentials: "include",
  });

  console.log(response.status);

  return response.status;
};
