import Slider from "react-slick";
import { Container, Button } from "react-bootstrap";
import "./All.css";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="banner-section">
                    <div className="banner-image position-relative">
                        <img
                            src="/public/banner.jpg"
                            alt="Basket of Vegetables"
                            className="img-fluid"
                        />
                    </div>
                    <Container>
                        <div className="position-absolute start-50px" style={{ top: '30%' }}>
                            <h5 className="text-success"><span className="text-decoration-underline">100%</span> Organic Vegetables</h5>
                            <h1 className="display-4 fw-bold my-4">Explore fresh &<br />juicy fruits.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit<br />Amet
                                reiciendis beatae consequuntur.
                            </p>
                            <Button variant="success" className="shop-now-btn">
                                Shop Now
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
            <div>
                <div className="banner-section">
                    <div className="banner-image position-relative">
                        <img
                            src="/public/banner-2.jpg"
                            alt="Basket of Vegetables"
                            className="img-fluid"
                        />
                    </div>
                    <Container>
                        <div className="position-absolute start-50px" style={{ top: '30%' }}>
                            <h5 className="text-success"><span className="text-decoration-underline">100%</span> Organic Vegetables</h5>
                            <h1 className="display-4 fw-bold my-4">The best way to<br />stuff your wallet.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit<br />Amet
                                reiciendis beatae consequuntur.
                            </p>
                            <Button variant="success" className="shop-now-btn">
                                Shop Now
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </Slider>

    );
};

export default Banner;