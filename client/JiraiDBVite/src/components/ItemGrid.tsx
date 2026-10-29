import { Link } from "react-router-dom";

interface databaseItem {
  imgKey: string;
  id: string;
  Description: string;
  category: string;
  imgURL: string;
}

interface AllItemsProps {
  itemList: databaseItem[];
}

function ItemGrid({ itemList }: AllItemsProps) {
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

export default ItemGrid;
