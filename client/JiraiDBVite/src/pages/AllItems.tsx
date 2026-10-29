import { useEffect, useState } from "react";
import { fetchAllItems } from "../utils/itemServices";
import ItemGrid from "../components/ItemGrid";

interface databaseItem {
  imgKey: string;
  id: string;
  Description: string;
  category: string;
  imgURL: string;
}

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
    <div className="allItemsLayout">
      <div>hi</div>

      <ItemGrid itemList={itemList} />

      <div>Hi</div>
    </div>
  );
}

export default AllItems;
