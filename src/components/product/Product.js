import './Product.css';
import { useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
function Product({ products, product, addToCart, removeFromCart }) {
    // const [quantity, setQuantity] = useState(0);

    const isWeighable = product.isWeighable;
    let spanText = isWeighable ? "לק\"ג" : "ליחידה"
    const [isRaised, setIsRaised] = useState(false);

    function add(product) {
        addToCart(product);
    }

    function remove(product) {
        if (product.quantity > 0) {
            removeFromCart(product);
        }
    }

    return (
        <div className="Product-card" >
            <Card sx={{ maxWidth: 280 }} align="center" raised={isRaised}
                onMouseEnter={() => { setIsRaised(true) }} onMouseOut={() => { setIsRaised(false) }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                        {product.price} ₪
                        {<span> {spanText}</span>}

                    </Typography>
                </CardContent>
                <div>
                    <Button onClick={() => { add(product) }}>+</Button>
                    <span>{product.quantity}</span>
                    <Button onClick={() => { remove(product) }}>-</Button>
                </div>
            </Card>
        </div>
    )
}
export default Product;