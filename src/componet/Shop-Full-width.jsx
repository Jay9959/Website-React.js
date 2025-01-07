import { Container, Row, Col, Card } from "react-bootstrap";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";
import { RiGridLine } from "react-icons/ri";
import { RiListCheck2 } from "react-icons/ri";

const ShopFullwidth = () => {
    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div className="main-class d-flex justify-content-between align-items-center p-3 mt-3 border">
                            <ButtonGroup>
                                <RiGridLine className="mt-1 border me-2 rounded-2 bg-success text-white" style={{ fontSize: "50px", padding: "10px" }} />
                                <RiListCheck2 className="mt-1 border rounded-2" style={{ fontSize: "50px", padding: "10px" }} />
                                <span className="ms-4 mt-3">We found 29 items for you!</span>
                            </ButtonGroup>
                            <Dropdown className="border rounded-2">
                                <Dropdown.Toggle variant="light" id="dropdown-sort">
                                    Sort By: Featured
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#featured">Featured</Dropdown.Item>
                                    <Dropdown.Item href="#price-low-high">Price: Low to High</Dropdown.Item>
                                    <Dropdown.Item href="#price-high-low">Price: High to Low</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl1.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl4.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl5.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl1.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl4.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl5.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl1.jpg" className="border rounded-3" />
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
                            <Card className="p-3 mt-5" style={{ width: '19rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
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
            </Container >
        </>
    )
}

export default ShopFullwidth;