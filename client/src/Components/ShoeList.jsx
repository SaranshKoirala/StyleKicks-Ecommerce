import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ShoeList({ shoe }) {
  if (!shoe._id || !shoe.image || !shoe.name) {
    return <p>Loading...</p>;
  }
  return (
    <Link
      to={"/product/:id"}
      key={shoe._id}
      className="w-60 h-auto list-none flex flex-col justify-center items-center font-mono gap-5 cursor-pointer"
    >
      <img src={shoe.image} />
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
    price: PropTypes.string.isRequired, // You can change it to PropTypes.number if price is numeric
  }).isRequired,
};

export default ShoeList;
