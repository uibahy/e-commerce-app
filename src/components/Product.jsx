import { Link } from 'react-router-dom'
import './styles/Product.css'

function Product (props){

    let product = props.product

    return(
        <div className='col-3'>
            <div className="card">
                <img src={product.image} className="card-img-to product-card" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title pro-text">{product.title}</h5>
                    <p className="card-text pro-text">{product.text}</p>
                    <p className="card-text pro-text">Price: {product.price}$</p>
                    {props.showButton ?? <Link to={`product/${product.id}`} className="btn btn-primary">Buy it for {product.price}$</Link>}
                </div>
            </div>        
        </div>
    )
}

export default Product