const apiURL = "http://localhost:3000";

export const fetchItemByID = async () => {
  const response = await fetch(`${apiURL}/Clothes/`);

  const item = await response.json();
  return item;
};
