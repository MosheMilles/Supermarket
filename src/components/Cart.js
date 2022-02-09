import { useContext } from "react";
import CartContext from "../contexts/CartContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
function Cart() {
  
  const cart = useContext(CartContext);
  return (
    <div>
      {cart.data.map(product => <div>{product.name}</div>)}
    </div>
  )};
export default Cart;
  