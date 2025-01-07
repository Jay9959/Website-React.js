import { Tab, Nav, Row, Col, Card, Container } from "react-bootstrap";

const Cark = () => {
    return (
        <>
            <Container>
                <div className=" mt-5">
                    <Tab.Container defaultActiveKey="cake-milk">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="text-success" eventKey="cake-milk">Cake & Milk (65 items)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-success" eventKey="fresh-meat">Fresh Meat (30 items)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-success" eventKey="vegetables">Vegetables (25 items)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-success" eventKey="apple-mango">Apple & Mango (45 items)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-success" eventKey="strawberry">Strawberry (68 items)</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-success">
                                            View More
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="cake-milk">
                                        <Row>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Cake"
                                                        alt="Cake"
                                                    />
                                                    <div className="discount-badge">50% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Cake</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Milk"
                                                        alt="Milk"
                                                    />
                                                    <div className="discount-badge">40% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Milk</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fresh-meat">
                                        <Row>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Cake"
                                                        alt="Cake"
                                                    />
                                                    <div className="discount-badge">50% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Cake</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Milk"
                                                        alt="Milk"
                                                    />
                                                    <div className="discount-badge">40% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Milk</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="vegetables">
                                        <Row>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Cake"
                                                        alt="Cake"
                                                    />
                                                    <div className="discount-badge">50% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Cake</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Milk"
                                                        alt="Milk"
                                                    />
                                                    <div className="discount-badge">40% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Milk</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="apple-mango">
                                        <Row>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Cake"
                                                        alt="Cake"
                                                    />
                                                    <div className="discount-badge">50% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Cake</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Milk"
                                                        alt="Milk"
                                                    />
                                                    <div className="discount-badge">40% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Milk</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="strawberry">
                                        <Row>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Cake"
                                                        alt="Cake"
                                                    />
                                                    <div className="discount-badge">50% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Cake</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Milk"
                                                        alt="Milk"
                                                    />
                                                    <div className="discount-badge">40% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Milk</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="view-more">
                                        <Row>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Cake"
                                                        alt="Cake"
                                                    />
                                                    <div className="discount-badge">50% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Cake</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card className="hover-card">
                                                    <Card.Img
                                                        variant="top"
                                                        src="https://via.placeholder.com/300x200?text=Milk"
                                                        alt="Milk"
                                                    />
                                                    <div className="discount-badge">40% OFF</div>
                                                    <Card.Body>
                                                        <Card.Title>Milk</Card.Title>
                                                        <button className="btn btn-success">Shop Now</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </>
    );
}

export default Cark;
