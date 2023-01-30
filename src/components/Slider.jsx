import './styles/Slider.css';

function Slider(){
    return (
        <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100 height-100" src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 height-100" src="https://img.freepik.com/free-photo/gua-sha-care-products-arrangement_23-2149322589.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 height-100" src="https://static-bebeautiful-in.unileverservices.com/how-to-keep-beauty-products-safe_mobhome.jpg" alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>

        </>
    )
}

export default Slider