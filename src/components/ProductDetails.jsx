import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from 'react-simple-loading';
import Product from './Product'
import { Link } from "react-router-dom";


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
            <Link to={`/`} className="btn btn-secondary mt-24"> Back </Link>
            {product.length === 0 ? <Loading />:<Product product={product} showButton={false}/>}
        </>
    )
}

export default ProductDatails