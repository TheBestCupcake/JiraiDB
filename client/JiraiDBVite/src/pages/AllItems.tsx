import { useEffect, useState } from "react";
import { fetchAllItems } from "../utils/itemServices";

type databaseItem = {
  imgKey: string;
  id: string;
  Description: string;
  category: string;
  imgURL: string;
};

function AllItems() {
  const [itemList, setItemList] = useState<databaseItem[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await fetchAllItems();
      setItemList(items);
    };

    getItems();
  }, []);

  return (
    <>
      <div className="allItemsContainer">
        {itemList.map((item: databaseItem) => (
          <div className="allItemsCol">
            <img key={item.id} src={item.imgURL} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AllItems;
