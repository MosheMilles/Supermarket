import './App.css';
import Header from '../header/Header.js';
import Products from '../products/Products.js';
import Cart from '../Cart.js';
import { useState } from 'react';
import { CartProvider } from '../../contexts/CartContext';

function App() {
  const products = [
    { key: 'id', id: 1, name: "עגבניה", category: "פירות וירקות", isWeighable: true, price: 7.9, image: "/images/עגבניות.jpg", quantity: 0 },
    { key: 'id', id: 2, name: "מלפפון", category: "פירות וירקות", isWeighable: true, price: 6.9, image: "/images/מלפפון.jpg", quantity: 0 },
    { key: 'id', id: 32, name: "תפוח", category: "פירות וירקות", isWeighable: true, price: 7.9, image: "/images/תפוח.jpg", quantity: 0 },
    { key: 'id', id: 11, name: "תפוח אדמה", category: "פירות וירקות", isWeighable: true, price: 7.9, image: "/images/תפוח אדמה.jpg", quantity: 0 },
    { key: 'id', id: 52, name: "בננה", category: "פירות וירקות", isWeighable: true, price: 7.9, image: "/images/בננה.jpg", quantity: 0 },
    { key: 'id', id: 56, name: "קיווי", category: "פירות וירקות", isWeighable: true, price: 10.9, image: "/images/קיווי.jpg", quantity: 0 },
    { key: 'id', id: 211, name: "תפוז", category: "פירות וירקות", isWeighable: true, price: 5.9, image: "/images/תפוז.jpg", quantity: 0 },
    { key: 'id', id: 201, name: "קלמנטינה", category: "פירות וירקות", isWeighable: true, price: 6.9, image: "/images/קלמנטינה.jpg", quantity: 0 },
    { key: 'id', id: 65, name: "עגבניות שרי", category: "פירות וירקות", isWeighable: true, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 101, name: "ניסיון1", category: "מוצרי חלב, סלטים וביצים", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 102, name: "ניסיון2", category: "בשר ודגים", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 103, name: "ניסיון3", category: "לחם ומאפים", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 104, name: "ניסיון4", category: "חטיפים וממתקים", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 105, name: "ניסיון5", category: "חד פעמי", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 106, name: "ניסיון6", category: "חומרי ניקוי", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 107, name: "ניסיון7", category: "מוצרי יסוד", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 108, name: "ניסיון8", category: "שימורים", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 109, name: "ניסיון9", category: "אפיה ובישול", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 110, name: "ניסיון10", category: "קפואים", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 },
    { key: 'id', id: 111, name: "ניסיון11", category: "היגיינה ותינוקות", isWeighable: false, price: 12.9, image: "/images/עגבניות שרי.jpg", quantity: 0 }
  ];

  const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index);
  const [shownProducts, setShownProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const cart = { data: cartProducts, update: (value) => setCartProducts(value) };

  function filterByCategory(selectedCategory) {
    setShownProducts(products.filter(product => product.category === selectedCategory))
  }

  function addToCart(product) {
    if (!cartProducts.includes(product)) {
      cartProducts.push(product);
      product.quantity = 1;
    } else product.quantity++;
    cart.update([...cartProducts]);
    console.log(cartProducts)
  }

  function removeFromCart(product) {
    product.quantity--;
    // console.log(product.quantity)

    if (product.quantity === 0){
      const newArray=cartProducts.filter(item => item.id !== product.id);
      console.log(newArray)
      cart.update([...newArray]);
    console.log(cartProducts)
    //  cartProducts.shift(product);

    console.log(cartProducts)
    // cart.update(cartProducts);
    // cart.update([...cartProducts]);
    console.log(cart.data)
    }
  }

  return (
    <div className="App" dir="rtl">
      <CartProvider value={cart}>

        <Header className="header" categories={categories} filterByCategory={filterByCategory} />

        <Products shownProducts={shownProducts} products={products}
          addToCart={addToCart} removeFromCart={removeFromCart} />
        <Cart products={products} />
      </CartProvider>
    </div>
  );
}

export default App;