import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <section>
            <h1> Products </h1>
            <ul>
                <li><Link to='/products/p1'>Book</Link></li>
                <li><Link to='/products/p2'> gin 2</Link></li>
                <li><Link to='/products/p3'> Tv 22</Link></li>
            </ul>
        </section>
    )
}

export default Products
