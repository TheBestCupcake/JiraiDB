import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchItemByID } from "../utils/itemServices";

function MainItem() {
  const [itemIMG, setItemIMG] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  //This returns everything after localhost:5173
  let location = useLocation();
  let id = location.pathname.split("/").at(-1);

  useEffect(() => {
    const loadIMG = async () => {
      const item = await fetchItemByID(id as string);
      setItemIMG(item.imgURL);
      setItemTitle(item.id);
      setItemDescription(item.Description);
    };

    loadIMG();
  }, [id]);
  return (
    <div className="mainItemLayout">
      <div className="split">
        <div className="split-left">
          <img src={itemIMG} className="displayImage" />
        </div>

        <div className="split-right">
          <h1>{itemTitle}</h1>

          <p>{itemDescription}</p>

          <table className="MainItemTable">
            <tbody>
              <tr>
                <th>Material</th>
                <td>
                  (Outer Fabric) 100% Polyester (Other Fabric) 100% Polyester
                  (Lining) 100% Polyester
                </td>
              </tr>
              <tr>
                <th>Measurements</th>
                <td>
                  (Top) Length: 72 cm / Shoulder width: 33.5 cm / Bust: 47.5 cm
                  / Waist: 63 cm (Max. 93 cm) / Sleeve Length: 61.5 cm / Cuff
                  Width: 11.5 cm / Hem Width: 102.5 cm (Skirt-Pants) Length:
                  42.5 cm / Waist: 59.5 cm (Max. 102 cm) / Belt Width: 7.5 cm /
                  Hem Width: 105 cm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MainItem;
