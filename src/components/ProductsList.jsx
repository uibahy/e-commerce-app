import { useEffect, useState } from 'react'
import Product from './Product'
import Loading from 'react-simple-loading';

function ProductsList(props){

    const apiUrl = `https://fakestoreapi.com/products/`
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const getProducts = () => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }

    const getCategories = () => {
        fetch(`${apiUrl}/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data))
    }

    const specificCategory = (catName) => {
        console.log(catName)
        fetch(`${apiUrl}/category/${catName}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    return(
        <>
        <h3 className=" text-center p-4 ">Products</h3>
        {categories.map((cat) => {
            return <button className='btn btn-secondary' onClick={() => specificCategory(cat)}>{cat}</button>
        })}
        <button className='btn btn-secondary' onClick={() => getProducts()}>All</button>
        <div className="container">
            <div className="row">
                {products.length === 0 ? <Loading /> : null}
                {products.map((product) => {
                   return (<Product product={product} key={product.id}/>)
                })}
            </div>
        </div>
        </>
    )
}

export default ProductsList