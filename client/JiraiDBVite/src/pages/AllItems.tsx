import { useEffect, useState } from "react";
import { fetchAllItems, fetchItemsByCategory } from "../utils/itemServices";
import ItemGrid from "../components/ItemGrid";
import { Link, useParams, useSearchParams } from "react-router-dom";

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
      const items = await fetchItemsByCategory("all");
      setItemList(items);
    };

    getItems();
  }, []);

  let [searchParams] = useSearchParams();

  return (
    <div className="allItemsLayout">
      <div>
        <Link to={{ pathname: "/Clothes", search: "?category=all" }}>
          All Items
        </Link>
        <br />
        <Link to={{ pathname: "/Clothes", search: "?category=category1" }}>
          Category 1
        </Link>
        <br />
        <Link to={{ pathname: "/Clothes", search: "?category=category2" }}>
          Category 2
        </Link>
        <br />
        <Link to={{ pathname: "/Clothes", search: "?category=category3" }}>
          Category 3
        </Link>

        <br />

        <input type="search" placeholder="Search" className="searchbar" />
      </div>

      <ItemGrid itemList={itemList} />

      <div>
        <div>
          <p>
            You searched for <i>{searchParams.get("category")}</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AllItems;
