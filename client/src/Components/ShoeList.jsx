import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ShoeList({ shoe }) {
  if (!shoe._id || !shoe.image || !shoe.name) {
    return <p>Loading...</p>;
  }
  return (
    <Link
      to={`/product/${shoe._id}`}
      key={shoe._id}
      className="list-none flex flex-col justify-center items-center font-mono gap-5 cursor-pointer "
    >
      <div className="h-[350px] w-[350px]">
        <img src={shoe.image} />
      </div>
      <div className="text-center">
        <p className="text-xl">{shoe.name}</p>
        <p className="font-bold">Rs {shoe.price}</p>
      </div>
    </Link>
  );
}

// PropTypes validation
ShoeList.propTypes = {
  shoe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired, // You can change it to PropTypes.number if price is numeric
  }).isRequired,
};

export default ShoeList;
