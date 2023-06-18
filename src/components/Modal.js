import { useDispatch } from "react-redux";
import { ModalClosed } from "../features/modal/modalSlice";
import { clearCart } from "../features/carts/cartSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from shopping cart</h4>
        <button type="button" className="btn confirm-btn" onClick={() =>{
         dispatch(clearCart());
          dispatch(ModalClosed());
        }
          }>Confirm</button>
        <button type="button" className="btn clear-btn"  onClick={() => dispatch(ModalClosed()) }>Concel</button>

      </div>
    </aside>
   );
}

export default Modal;