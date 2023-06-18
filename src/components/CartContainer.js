import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { ModalOpened } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bug</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bug</h2>
      </header>
      <div>
        {cartItems.map((item) =>{
         return  <CartItem key={item.id} {...item}/>
        } )}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
          <button className="btn btn-clear" type="button" onClick={() => dispatch(ModalOpened())}>clear cart</button>
        </div>
      </footer>
    </section>
  )
};

export default CartContainer;
