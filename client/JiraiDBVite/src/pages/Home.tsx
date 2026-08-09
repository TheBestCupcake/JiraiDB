import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchAllItems,
  fetchItemByID,
  fetchItemsBySearch,
} from "../utils/itemServices";

type databaseItem = {
  imgPath: string;
  id: string;
  Description: string;
  category: string;
};

type checkbox = {
  [key: string]: boolean;
};

function Home() {
  const [itemIMG, setItemIMG] = useState("");

  //This returns everything after localhost:5173
  let location = useLocation();
  let id = location.pathname;

  useEffect(() => {
    const loadIMG = async () => {
      const item = await fetchItemByID(id);
      setItemIMG(item.imgPath);
    };

    loadIMG();
  }, [id]);

  const [itemList, setItemList] = useState<databaseItem[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await fetchAllItems();
      setItemList(items);
    };

    getItems();
  }, []);

  const [filterSearchInput, setFilterSearchInput] = useState("");
  const [filterSearchList, setFilterSearchList] = useState<databaseItem[]>([]);

  useEffect(() => {
    const filterBySearch = async () => {
      setFilterSearchInput(filterSearchInput);

      const filteredItems = itemList.filter((item) =>
        item.id.includes(filterSearchInput),
      );
      setFilterSearchList(filteredItems);
    };

    filterBySearch();
  }, [filterSearchInput]);

  const [searchInput, setSearchInput] = useState("");
  const [searchItemList, setSearchItemList] = useState([]);

  useEffect(() => {
    const search = async () => {
      setSearchInput(searchInput);

      const items = await fetchItemsBySearch(searchInput);
      setSearchItemList(items);
    };

    search();
  }, [searchInput]);

  const [checkboxOrItemList, setCheckboxOrItemList] = useState<databaseItem[]>(
    [],
  );

  const [checkboxes, setCheckboxes] = useState<checkbox>({
    category1: false,
    category2: false,
    category3: false,
  });

  const handleORCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setCheckboxes((prev) => ({
      ...prev,
      [value]: checked,
    }));
  };

  useEffect(() => {
    const filtered = itemList.filter((item) => checkboxes[item.category]);

    setCheckboxOrItemList(filtered);
  }, [checkboxes, itemList]);

  const radioCategories = [
    { label: "All", name: "Category", value: "" },
    { label: "Category 1", name: "Category", value: "category1" },
    { label: "Category 2", name: "Category", value: "category2" },
    { label: "Category 3", name: "Category", value: "category3" },
  ];

  const [radioItemList, setRadioItemList] = useState<databaseItem[]>([]);
  const [currentRadio, setCurrentRadio] = useState("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCurrentRadio(value);
  };

  useEffect(() => {
    let filtered;
    if (currentRadio == "") {
      filtered = itemList;
    } else {
      filtered = itemList.filter((item) => item.category == currentRadio);
    }

    setRadioItemList(filtered);
  }, [currentRadio, itemList]);

  return (
    <>
      <section>
        <div className="split">
          <div className="split-left">
            <img src={itemIMG} className="displayImage" />
          </div>
          <div className="split-right">
            <h1>Home</h1>
            <h2>Display</h2>
            <p>Hi</p>
            <h2>Waow</h2>
            <p>Mwah</p>
          </div>
        </div>
      </section>

      <section>
        <div className="dropdown">
          <Link className="dropdownButton" to="/Test0">
            Dropdown
          </Link>
          <div className="dropdownContent">
            <Link to="/Test1">DropdownSize1</Link>
            <Link to="/Test2">Drop2</Link>
            <Link to="/Test3">DropdownS3</Link>
          </div>
        </div>
      </section>

      <section>
        <h1>All Items</h1>
        <div>
          {itemList.map((item: databaseItem) => (
            <>
              <img key={item.id} src={item.imgPath} />
            </>
          ))}
        </div>
      </section>

      <section>
        <h1>Fetch all items and filter based on search</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            className="searchbar"
            value={filterSearchInput}
            onChange={(filterSearchBar) =>
              setFilterSearchInput(filterSearchBar.target.value)
            }
          />

          <p>{filterSearchInput}</p>

          {filterSearchList.map((item: databaseItem) => (
            <>
              <img key={item.id} src={item.imgPath} />
            </>
          ))}
        </div>
      </section>

      <section>
        <h1>Search sends api request</h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            className="searchbar"
            value={searchInput}
            onChange={(searchBar) => setSearchInput(searchBar.target.value)}
          />

          <p>{searchInput}</p>

          {searchItemList.map((item: databaseItem) => (
            <>
              <img key={item.id} src={item.imgPath} />
              <p>{item.Description}</p>
            </>
          ))}
        </div>
      </section>

      <section>
        <div>
          <label>
            Category 1
            <input
              type="checkbox"
              name="Category 1"
              value="category1"
              onChange={handleORCheckboxChange}
            />
          </label>

          <label>
            Category 2
            <input
              type="checkbox"
              name="Category 2"
              value="category2"
              onChange={handleORCheckboxChange}
            />
          </label>

          <label>
            Category 3
            <input
              type="checkbox"
              name="Category 3"
              value="category3"
              onChange={handleORCheckboxChange}
            />
          </label>
        </div>

        <div>
          {checkboxOrItemList.map((item) => (
            <>
              <img key={item.id} src={item.imgPath} />
            </>
          ))}
        </div>
      </section>

      <section>
        <div>
          {radioCategories.map((category) => (
            <label>
              {category.label}
              <input
                type="radio"
                name={category.name}
                value={category.value}
                onChange={handleRadioChange}
                checked={category.value === currentRadio}
              />
            </label>
          ))}
        </div>

        <div>
          {radioItemList.map((item) => (
            <>
              <img key={item.id} src={item.imgPath} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
