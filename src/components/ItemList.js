import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const totalAmount = useSelector((store) => store.cart.totalAmount);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="flex justify-between items-center p-4 border-b-2 border-gray-200"
        >
          <div className="flex-1 text-left pr-4">
            <div className="font-semibold">{item.card.info.name}</div>
            <div className="text-sm text-gray-700">
              ₹ {item.card.info.price ? item.card.info.price / 100 : 100}
            </div>
            <p className="text-xs text-gray-700">
              {item.card.info.description}
            </p>
          </div>
          <div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-40 h-auto rounded-lg"
              alt={item.card.info.name}
            />
            <button
              className="p-2 bg-green-300 shadow-lg rounded-lg m-2"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <button
              className="p-2 bg-red-300 shadow-lg rounded-lg"
              onClick={() => handleRemoveItem(item)}
            >
              Remove -
            </button>
          </div>
        </div>
      ))}

      <div className="p-4 text-right font-bold text-lg">
        Total Amount: ₹ {totalAmount}
      </div>     
    </div>
  );
};

export default ItemList;
