import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const count = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <h2>Paradise Nursery</h2>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">🛒 {count}</Link>
      </nav>
    </header>
  );
}

