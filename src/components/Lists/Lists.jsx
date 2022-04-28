import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleCart from "../SingleCart/SingleCart";
import "./Lists.css";
const prodsList = [
  "TOPS",
  "DRESSES",
  "SKIRTS",
  "BOTTOMS",
  "WINTER WEAR",
  "LOUNGEWEAR",
];

const Lists = ({ type }) => {
  const { productsData } = useSelector((state) => state.getProductsReducer);
  const { categoriesData } = useSelector((state) => state.getCategoriesReducer);
  const [updateProduct, setUpdateProduct] = useState("");
  const [updateCategory, setUpdateCategory] = useState("");

  useEffect(() => {
    getUpdatedCategories();
  }, [type]);

  function getUpdatedCategories() {
    let tempCate =
      categoriesData &&
      categoriesData.filter((cate_data) => {
        return cate_data.cat_title === type;
      });
    let tempPro =
      tempCate &&
      productsData &&
      productsData.filter((pro_data) => {
        return pro_data.categoryId === tempCate[0].id;
      });
    setUpdateProduct(tempPro);
    setUpdateCategory(tempCate);
  }

  const prod_listHandleClick = (list) => {
    let tempPro =
      productsData &&
      productsData.filter((pro_data) => {
        return pro_data.title === list;
      });
    setUpdateProduct(tempPro);
  };

  const uniqueList = [
    ...new Set(
      updateProduct &&
        updateProduct.map((currElem) => {
          return currElem.title;
        })
    ),
  ];

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {
          <>
            <div className="left-list-container">
              <div>
                <h2>{updateCategory && updateCategory[0].cat_title}</h2>
                <p
                  style={{
                    color: "rgb(252,100,134)",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  {updateCategory && updateCategory[0].cat_title}
                </p>
              </div>
              <div>
                {uniqueList &&
                  uniqueList.map((list, index) => (
                    <div key={index}>
                      <p
                        onClick={() => prod_listHandleClick(list)}
                        className="prods"
                      >
                        {list}
                      </p>
                    </div>
                  ))}
              </div>
              <div style={{ marginTop: "5px" }}>
                {prodsList.map((pro_list, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        fontWeight: "bold",
                        fontSize: "0.9em",
                        display: "flex",
                        justifyContent: "space-between",
                        cursor: "pointer",
                      }}
                    >
                      <p>{pro_list}</p>
                      <span
                        style={{ fontSize: "0.8rem" }}
                        className="material-symbols-outlined"
                      >
                        arrow_forward_ios
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        }
        <div className="right-list-container">
          <div>
            <input placeholder="price" list="priceList" />
            <input placeholder="discount" list="discList" />
            <datalist id="priceList">
              <option>300</option>
              <option>400</option>
              <option>500</option>
              <option>1000</option>
              <option>2000</option>
              <option>3000</option>
            </datalist>
            <datalist id="discList">
              <option></option>
              <option>{type}</option>
              <option>50</option>
              <option>70</option>
            </datalist>
          </div>
          <div
            style={{
              display: "grid",
              gap: "0.5em",
              gridTemplateColumns: "auto auto auto",
            }}
          >
            {updateProduct &&
              updateProduct.map((currElem) => (
                <SingleCart key={currElem.id} currElem={currElem} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
