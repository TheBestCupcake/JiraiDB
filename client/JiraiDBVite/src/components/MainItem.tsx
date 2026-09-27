import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchItemByID } from "../utils/itemServices";

function MainItem() {
  const [itemIMG, setItemIMG] = useState("");

  //This returns everything after localhost:5173
  let location = useLocation();
  let id = location.pathname;

  useEffect(() => {
    const loadIMG = async () => {
      const item = await fetchItemByID("testid");
      setItemIMG(item.imgPath);
    };

    loadIMG();
  }, [id]);
  return (
    <section>
      <div className="split">
        <div className="split-left">
          <img src={itemIMG} className="displayImage" />
        </div>

        <div className="split-right">
          <h1>【9/27(日)20時発売】Lace & ribbon off shoulder foodie</h1>
          <h2>$171.00</h2>
          <br />
          <p>
            <strong>ご注文後のキャンセル・変更はお受けできません。</strong>
          </p>
          <br />
          <p>
            こちらの商品は通常商品です。予約商品と通常商品を同一カートで同時購入した場合は、発送は全てのお品物が揃ってから同梱での発送となります。お急ぎの場合は、お手数ですが別々にご注文ください。尚、その際はご注文毎に送料が発生いたします。
          </p>
          <br />
          <p>
            袖のサテンリボン×カットアウトがポイントのオフショルフーディー。肌触りの優しいカットソー生地を使用し、丈感やシルエットにもこだわりました。大きめのフーディーはどこかヴェールを思わせ、カジュアルながらもゴシックな雰囲気に。
          </p>
          <br />
          <p>
            【素材】
            <br />
            本体：ポリエステル64％、レーヨン32％、ポリウレタン4％　レース1：ナイロン100％　レース2：ナイロン100％　レース3：ナイロン100％　レース4：ナイロン100％
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainItem;
