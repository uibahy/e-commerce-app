import { useEffect, useState } from 'react'
import Product from './Product'

function ProductsList(){
    const apiUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return(
        <>
        <h3 className=" text-center p-4 ">Products</h3>
        <div className="container">
            <div className="row">
                {products.map((product) => {
                   return (<Product 
                        key = {product.id}
                        title={product.title}
                        text={product.description}
                        img={product.image}
                        price={product.price}
                    />)
                })}
            </div>
        </div>
        </>
    )
}

export default ProductsList