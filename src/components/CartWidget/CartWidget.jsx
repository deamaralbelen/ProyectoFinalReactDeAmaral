import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/useCart';
import '../../styles/Cart.css';

const CartWidget = () => {
    const { cart } = useCart();

    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    if (totalQuantity === 0) {
        return null;
    }

    return (
        <Link to="/cart" className="cart-widget">
            <FaShoppingCart size={24} />
            <span>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;