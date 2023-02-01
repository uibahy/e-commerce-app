import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from 'react-simple-loading';
import Product from './Product'


function ProductDatails(){
    const params = useParams()
    const apiUrl = `https://fakestoreapi.com/products/${params.productId}`
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [])

    return(
        <>
            {product.length === 0 ? <Loading />: null}
            <Product product={product}/>
        </>
    )
}

export default ProductDatails