import { useEffect, useState } from "react";

type databaseItem = {
  category: string;
};

function RadioSelector() {
  const itemList: databaseItem[] = [
    { category: "White" },
    { category: "Black" },
    { category: "Grey" },
  ];

  const filterCategories = [
    { label: "White", name: "White", value: "White" },
    { label: "Black", name: "Black", value: "Black" },
    { label: "Grey", name: "Grey", value: "Grey" },
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
    <section>
      <div className="radio-toolbar">
        {filterCategories.map((category) => (
          <>
            <label>{category.label}</label>
            <input
              type="radio"
              name={category.name}
              value={category.value}
              onChange={handleRadioChange}
              checked={category.value === currentRadio}
            />
          </>
        ))}
      </div>
    </section>
  );
}

export default RadioSelector;
