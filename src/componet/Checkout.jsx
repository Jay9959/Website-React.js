import { Col, Container, Form, FormCheck, Row } from "react-bootstrap"

const Checkout = () => {
    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div className="col-lg-3">
                            <div className="border p-2">
                                <div>
                                    <h3 className="fs-5">Summary</h3>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <span className="text-secondary">Sub-Total</span>
                                        <span>$80.00</span>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <span className="text-secondary">Delivery Charges</span>
                                        <span>$80.00</span>
                                    </div>
                                </div>
                                <div className="border-bottom"></div>
                                <div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <span>Total Amount</span>
                                        <span>$80.00</span>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            <Row>
                                                <img src="/public/Styl1.jpg" alt="" style={{ width: "32%", height: '32%' }} />
                                                <Col>
                                                    <div className="checkout-contant">
                                                        <h6>Dates Value Pack Pouch</h6>
                                                        <div className="stat">⭐⭐⭐⭐⭐</div>
                                                        <p>
                                                            <span className="fw-bold" style={{ color: '#64b496' }}>$120.25</span>
                                                            <span className="text-decoration-line-through ms-2">$123.25</span>
                                                        </p>
                                                    </div>
                                                </Col>
                                                <img src="/public/Styl2.jpg" alt="" style={{ width: "32%", height: '32%' }} />
                                                <Col>
                                                    <div className="checkout-contant">
                                                        <h6>Dates Value Pack Pouch</h6>
                                                        <div className="stat">⭐⭐⭐⭐⭐</div>
                                                        <p>
                                                            <span className="fw-bold" style={{ color: '#64b496' }}>$120.25</span>
                                                            <span className="text-decoration-line-through ms-2">$123.25</span>
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-2 mt-2">
                                <div>
                                    <h3 className="fs-5">Delivery Method</h3>
                                    <p>Please select the preferred shipping method to use on this order.</p>
                                    <Form>
                                        <div className="d-flex">
                                            <p className="fw-semibold">Free Shipping</p>
                                            <p className="fw-semibold" style={{marginLeft:"22%"}}>Flat Rate</p>
                                        </div>
                                        <div className="d-flex">
                                            <FormCheck
                                                type="radio"
                                                id="radio2"
                                                name="radio"
                                                label="Rate - $0 .00"
                                                inline
                                            />
                                            <FormCheck
                                                type="radio"
                                                id="radio3"
                                                name="radio"
                                                label="Rate - $5.00"
                                                inline  
                                                style={{marginLeft:"34px"}}
                                            />
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 border">
                            Checkout
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Checkout