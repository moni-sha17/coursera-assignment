import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.items[plant.id]);

  return (
    <div className="card">
      <img src={plant.img} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>${plant.price}</p>
      <button disabled={inCart} onClick={() => dispatch(addToCart(plant))}>
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

