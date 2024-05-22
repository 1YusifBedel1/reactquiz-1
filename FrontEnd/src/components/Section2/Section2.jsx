import React, { useContext, useState } from "react";
import "./Section2.css";
import MainContext from "../../context/context";
import Card from "../Card/Card";
const Section2 = () => {
  const [inpVal, setInpVal] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const { data } = useContext(MainContext);
  return (
    <section className="section2">
      <div className="container">
        <span>POPULAR PRODUCTS</span>
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
        <input
          value={inpVal}
          onChange={(e) => {
            setInpVal(e.target.value);
          }}
          type="text"
          placeholder="Search "
        />
        <button
          onClick={() => setSortBy({ field: "title", asc: true })}
          className="btn btn-primary mx-3  "
        >
          A-Z
        </button>
        <button
          onClick={() => setSortBy({ field: "title", asc: false })}
          className="btn btn-primary mx-3 "
        >
          Z-A
        </button>
        <button
          onClick={() => setSortBy({ field: "price", asc: false })}
          className="btn btn-primary v"
        >
          Low To High
        </button>
        <button
          onClick={() => setSortBy({ field: "price", asc: true })}
          className="btn btn-primary mx-3 "
        >
          High To Low
        </button>
        <div className="s2Bottom">
          {data
            .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc == true) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
            .map((item, index) => {
              return <Card key={index} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Section2;
