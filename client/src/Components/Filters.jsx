import { useState } from "react";

function Filters() {
  const [selectFilters, setSelectFilter] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;
    setSelectFilter((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  }
  console.log(selectFilters);

  return (
    <div className="w-[15%]">
      <div>
        <div className="font-semibold py-2">Gender</div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="men"
            value="Men"
            checked={selectFilters.includes("Men")}
            onChange={handleChange}
          />
          <p>Men</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="women"
            value="Women"
            checked={selectFilters.includes("Women")}
            onChange={handleChange}
          />
          <p>Women</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="unisex"
            value="Unisex"
            checked={selectFilters.includes("Unisex")}
            onChange={handleChange}
          />
          <p>Unisex</p>
        </div>
      </div>
      <div>
        <div className="font-semibold py-2">Shop By Price</div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="price1"
            value="Rs2000 - Rs4000"
            checked={selectFilters.includes("Rs2000 - Rs4000")}
            onChange={handleChange}
          />
          <p>Rs2000 - Rs4000</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="price2"
            value="Rs5000 - Rs7000"
            checked={selectFilters.includes("Rs5000 - Rs7000")}
            onChange={handleChange}
          />
          <p>Rs5000 - Rs7000</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="price3"
            value="Rs8000 - above"
            checked={selectFilters.includes("Rs8000 - above")}
            onChange={handleChange}
          />
          <p>Rs8000 - above</p>
        </div>
      </div>
      <div>
        <div className="font-semibold py-2">Brand</div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="nike"
            value="Nike"
            checked={selectFilters.includes("Nike")}
            onChange={handleChange}
          />
          <p>Nike</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="adidas"
            value="Adidas"
            checked={selectFilters.includes("Adidas")}
            onChange={handleChange}
          />
          <p>Adidas</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="converse"
            value="Converse"
            checked={selectFilters.includes("Converse")}
            onChange={handleChange}
          />
          <p>Converse</p>
        </div>
      </div>
      <div>
        <div className="font-semibold py-2">Category</div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="sports"
            value="Sports"
            checked={selectFilters.includes("Sports")}
            onChange={handleChange}
          />
          <p>Sports</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="sneakers"
            value="Sneakers"
            checked={selectFilters.includes("Sneakers")}
            onChange={handleChange}
          />
          <p>Sneakers</p>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            className="w-4"
            name="formals"
            value="Formals"
            checked={selectFilters.includes("Formals")}
            onChange={handleChange}
          />
          <p>Formals</p>
        </div>
      </div>
    </div>
  );
}

export default Filters;
