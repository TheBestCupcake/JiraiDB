import { useEffect, useState } from "react";
import { fetchAllItems } from "../utils/itemServices";
import { Link } from "react-router-dom";

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
            <Link to={item.id}>
              <img key={item.id} src={item.imgURL} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllItems;
