import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { Calculator, fetchData } from "./features/carts/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems} = useSelector((state) => state.cart);
  const { isOpened } = useSelector((state)=> state.modal );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Calculator())

  }, [dispatch,cartItems])

  useEffect(() => {
    dispatch(fetchData())

  }, [dispatch])

  return (
    <main>
      <Navbar />
      <CartContainer />
      {isOpened && <Modal />}
    </main>
  );
}
export default App;
