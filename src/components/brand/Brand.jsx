import "./brand.css";
import { google, slack, lassian, dropbox, shopify } from "./import";
const Brand = () => {
  return (
    <>
      <div className="gpt3__brand section__padding">
        <div>
          <img src={google} alt="brand"></img>
        </div>
        <div>
          <img src={slack} alt="brand"></img>
        </div>
        <div>
          <img src={lassian} alt="brand"></img>
        </div>
        <div>
          <img src={dropbox} alt="brand"></img>
        </div>
        <div>
          <img src={shopify} alt="brand"></img>
        </div>
      </div>
    </>
  );
};

export default Brand;
