import './styles/Product.css'

function Product (props){

    return(
        <div className='col-3'>
            <div className="card">
                <img src={props.img} className="card-img-to product-card" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title pro-text">{props.title}</h5>
                    <p className="card-text pro-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">Buy it for {props.price}$</a>
                </div>
            </div>        
        </div>
    )
}

export default Product