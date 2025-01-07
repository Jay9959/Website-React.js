import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoBagOutline } from "react-icons/io5";

const ProductFullWidth = () => {

    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div className="col-lg-9 w-100 mt-5">
                            <Row>
                                <Col md={6}>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src="/public/Styl1.jpg"
                                            alt="Product"
                                        />
                                        <Card.Body className="d-flex justify-content-between">
                                            <img
                                                src="/public/Styl2.jpg"
                                                alt="Thumbnail 1"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                            <img
                                                src="/public/Styl3.jpg"
                                                alt="Thumbnail 2"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                            <img
                                                src="/public/Styl4.jpg"
                                                alt="Thumbnail 3"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                            <img
                                                src="/public/Styl5.jpg"
                                                alt="Thumbnail 3"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <h4>Seeds Of Change Organic Quinoa, Brown</h4>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?
                                    </p>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6 ms-2 text-dark">(75 Review)</span>
                                    </div>
                                    <div className="list-name">
                                        <ul>
                                            <li>
                                                <label>
                                                    Brand
                                                    <span>:</span>
                                                </label>
                                                ESTA BETTERU CO
                                            </li>
                                            <li>
                                                <label>
                                                    Flavour
                                                    <span>:</span>
                                                </label>
                                                Super Saver Pack
                                            </li>
                                            <li>
                                                <label>
                                                    Diet Type
                                                    <span>:</span>
                                                </label>
                                                Vegetarian
                                            </li>
                                            <li>
                                                <label>
                                                    Weight
                                                    <span>:</span>
                                                </label>
                                                200 Grams
                                            </li>
                                            <li>
                                                <label>
                                                    Speciality
                                                    <span>:</span>
                                                </label>
                                                Gluten Free, Sugar Free
                                            </li>
                                            <li>
                                                <label>
                                                    Info
                                                    <span>:</span>
                                                </label>
                                                Egg Free, Allergen-Free
                                            </li>
                                            <li>
                                                <label>
                                                    Items
                                                    <span>:</span>
                                                </label>
                                                1
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        <span className="text-success" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                            $120.26
                                        </span>{' '}
                                        <del>$123.45</del>
                                    </p>

                                    <Form.Label>Size / Weight:</Form.Label>
                                    <Button className="mx-2 BTN">50 Kg</Button>
                                    <Button className="mx-2 BTN">80 Kg</Button>
                                    <Button className="mx-2 BTN">120 Kg</Button>
                                    <Button className="mx-2 BTN">200 Kg</Button>
                                    <div className="mt-3">
                                        <span className="border rounded-2" style={{ padding: "10px 15px" }}>{count}</span>
                                        <Button variant="outline-primary ms-1" style={{ fontSize: "10px" }} onClick={increment}>
                                            +
                                        </Button>
                                        <Button variant="outline-secondary ms-2" style={{ fontSize: "10px" }} onClick={decrement}>
                                            -
                                        </Button>
                                        <Button variant="primary" className="ms-3">
                                            Add To Cart
                                        </Button>
                                        <Button className="icon-heart text-dark">
                                            <FiHeart />
                                        </Button>
                                        <Button className="icon-heart text-dark">
                                            <GoEye />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4 border w-10 p-3">
                                <Col>
                                    <Tabs
                                        defaultActiveKey="home"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="home" title="Description">
                                            <div>
                                                <p className="text-secondary">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, inventore?
                                                </p>
                                                <h5>
                                                    Packaging & Delivery
                                                </h5>
                                                <div className="border-bottom my-3"></div>
                                                <p className="text-secondary">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, inventore?
                                                </p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="profile" title="Information">
                                            <div>
                                                <p className="text-secondary">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, inventore?
                                                </p>
                                                <div className="list-name">
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                Brand
                                                                <span>:</span>
                                                            </label>
                                                            ESTA BETTERU CO
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Flavour
                                                                <span>:</span>
                                                            </label>
                                                            Super Saver Pack
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Diet Type
                                                                <span>:</span>
                                                            </label>
                                                            Vegetarian
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Weight
                                                                <span>:</span>
                                                            </label>
                                                            200 Grams
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Speciality
                                                                <span>:</span>
                                                            </label>
                                                            Gluten Free, Sugar Free
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Info
                                                                <span>:</span>
                                                            </label>
                                                            Egg Free, Allergen-Free
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Items
                                                                <span>:</span>
                                                            </label>
                                                            1
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="contact" title="Review" disabled>
                                            Tab content for Contact
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </div>
                    </Row >
                    <Row>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl1.jpg" className="border rounded-3" />
                                    <IoBagOutline className="position-absolute start-50 bottom-0 text-success m-2" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
                                    <IoBagOutline className="position-absolute start-50 bottom-0 text-success m-2" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
                                    <IoBagOutline className="position-absolute start-50 bottom-0 text-success m-2" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
                                    <IoBagOutline className="position-absolute start-50 bottom-0 text-success m-2" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
                                    <IoBagOutline className="position-absolute start-50 bottom-0 text-success m-2" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    )
}

export default ProductFullWidth;