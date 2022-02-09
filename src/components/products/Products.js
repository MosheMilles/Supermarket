import './Products.css';
import Product from '../product/Product.js';
function Products({shownProducts,products,addToCart,removeFromCart}) {

    return (
        <div className="products">
            { shownProducts.map((product) => 
                        <Product key={product.id} className="card" product={product} products={products}
                         addToCart={addToCart} removeFromCart={removeFromCart} />
                )};
        </div> 
    );
};

export default Products;

