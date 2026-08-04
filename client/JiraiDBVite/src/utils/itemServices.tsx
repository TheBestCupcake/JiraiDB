const apiURL = "http://localhost:3000";

export const fetchItemByID = async (id: string) => {
  const response = await fetch(`${apiURL}${id}`);

  const item = await response.json();
  return item;
};

export const fetchAllItems = async () => {
  const response = await fetch(`${apiURL}/Clothes`);

  const items = await response.json();
  return items;
};

export const fetchItemsBySearch = async (searchQuery: string) => {
  console.log(searchQuery);
  const response = await fetch(`${apiURL}/Clothes?search=${searchQuery}`);

  const items = await response.json();
  console.log(items);
  return items;
};
