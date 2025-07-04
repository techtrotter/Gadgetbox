import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listTopProducts } from '../redux/actions/productActions'
import Loader from './Loader'
import Message from './Message'

function ProductCarousel() {
    const dispatch = useDispatch()
    const topProduct = useSelector(state => state.topProduct)
    const { error, loading, products } = topProduct

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    // Filter out the product with the name "Lenovo ThinkPad"
    const filteredProducts = products.filter(product => product.name !== 'Lenovo ThinkPad')

    return (
        loading ? <>
            <Loader />
            <Loader />
            <Loader />
        </> : error ?
            <Message variant='danger'>{error}</Message> :

            <Carousel pause='hover' className='bg-dark'>
                {filteredProducts.map(product => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <Image src={product.image} alt={product.name} fluid />
                            <Carousel.Caption className='carousel-caption'>
                                <h4>{product.name} (₹{product.price})</h4>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
    )
}

export default ProductCarousel
