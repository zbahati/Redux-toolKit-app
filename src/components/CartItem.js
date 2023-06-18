import { useDispatch } from "react-redux";
import { ChevronUp, ChevronDown } from "../icons";
import { Decrement, Increment, removeItem } from "../features/carts/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
        <button className="amount-btn" type="button" onClick={() => dispatch(Increment({id}))}>
          <ChevronUp />
        </button>
        <p className="amount-btn">{amount}</p>
        <button className="amount-btn" onClick={() =>{
          if(amount === 1){
            dispatch(removeItem(id));
            return;
          }
          dispatch(Decrement({id}))}
        } >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
