import './styles/CartProduct.css';
function CartProduct({ product }) {

    return (

        <div className="product-row">
           
            <div className="product-quantity">{product.quantity}</div>
            <div className="image">
                <img src={product.image} alt=''/>
           </div>
            <div className="product-title">{product.name}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-total-price">{(product.quantity * product.price).toFixed(1)}</div>
            {/* <button onClick={() => removeFromList(id)}>-</button>{product.quantity}<button onClick={() => addToList(id)}>+</button> */}
        </div>
    )
}
export default CartProduct;