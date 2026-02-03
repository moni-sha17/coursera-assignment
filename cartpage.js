import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, remove } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items, totalQuantity, totalPrice } = useSelector((s) => s.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <h2>Total Items: {totalQuantity}</h2>
      <h3>Total Cost: ${totalPrice}</h3>

      {Object.values(items).map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => dispatch(increase(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decrease(item.id))}>-</button>
          <button onClick={() => dispatch(remove(item.id))}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </>
  );
}
