const apiURL = "http://localhost:3000";

export const fetchItemByID = async (id: string) => {
  console.log(id);
  const response = await fetch(`${apiURL}${id}`);

  const item = await response.json();
  return item;
};

export const fetchAllItems = async () => {
  console.log("fetching");
  const response = await fetch(`${apiURL}/Clothes`);

  const items = await response.json();
  console.log(items);
  return items;
};
