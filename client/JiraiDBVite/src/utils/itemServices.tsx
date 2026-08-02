const apiURL = "http://localhost:3000";

export const fetchItemByID = async (id: string) => {
  console.log(id);
  const response = await fetch(`${apiURL}${id}`);

  const item = await response.json();
  return item;
};
