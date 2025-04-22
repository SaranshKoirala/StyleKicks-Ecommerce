import PropTypes from "prop-types";
import useProductStore from "../Store/productStore";
import { Link } from "react-router-dom";

function ShoeCard({ item }) {
  const { error, setIsOpen, setSearchTerm } = useProductStore();

  function handleLink() {
    setIsOpen(false);
    setSearchTerm("");
  }

  if (!item) {
    return <div>Loading...</div>;
  }
  return error ? (
    <div>{error}</div>
  ) : (
    <Link
      to={`/product/${item._id}`}
      className="flex flex-col"
      onClick={handleLink}
    >
      <img src={item.image} alt="item.name" className="w-40" />
      <p className="font-semibold">{item.name}</p>
    </Link>
  );
}

ShoeCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ShoeCard;
