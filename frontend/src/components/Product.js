import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this is the correct path to your CSS
import Rating from './Rating'; // Correct import for Rating component

function Product({ product }) {
    return (
        <Card className='my-3 rounded product-card'> {/* Added product-card class for custom styling */}
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} alt={product.name} className="product-image" /> {/* Added alt attribute for better accessibility */}
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div" className="product-title">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div className='my-2 product-rating'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'green'} /> {/* Ensure color is green as per your request */}
                    </div>
                </Card.Text>

                <Card.Text as='h4' className="product-price">
                    ₹{product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
