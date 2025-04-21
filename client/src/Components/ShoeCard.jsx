import PropTypes from "prop-types";
import useProductStore from "../Store/productStore";

function ShoeCard({ item }) {
  const { error } = useProductStore();
  if (!item) {
    return <div>Loading...</div>;
  }
  return error ? (
    <div>{error}</div>
  ) : (
    <div className="flex flex-col">
      <img src={item.image} alt="item.name" className="w-40" />
      <p className="font-semibold">{item.name}</p>
    </div>
  );
}

ShoeCard.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default ShoeCard;
