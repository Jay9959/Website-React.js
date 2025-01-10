import { useState } from 'react';
import { Accordion, NavDropdown, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const Header2 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <div className="header2">
                    <Navbar expand="lg" className='text-body'>

                        <Navbar.Brand>
                            <HiOutlineMenuAlt1 onClick={handleShow} variant="primary" className='border rounded-3' style={{ fontSize: '30px' }} />
                        </Navbar.Brand>

                        {/* OFFCENVAS START */}
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Home</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li> Shop Left sidebar</li>
                                                <li>Shop Right sidebar</li>
                                                <li>Full Width</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Products</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>product Left sidebar</li>
                                                <li>product Right sidebar</li>
                                                <li>Product Full Width</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Pages</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>About Us</li>
                                                <li>Contact Us</li>
                                                <li>Cart</li>
                                                <li>Checkout</li>
                                                <li>Track Order</li>
                                                <li>Wishlist</li>
                                                <li>Faq</li>
                                                <li>Login</li>
                                                <li>Register</li>
                                                <li>Policy</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Blog</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Shop Left sidebar</li>
                                                <li>Shop Right sidebar</li>
                                                <li>Full Width</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Products</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Shop Left sidebar</li>
                                                <li>Shop Right sidebar</li>
                                                <li>Product Full Width</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Offcanvas.Body>
                        </Offcanvas>
                        {/* OFFCENVAS END */}

                        {/* HEADER START  */}
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="ms-auto">
                                <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                                <NavDropdown title="Category" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/shopLeftsidebar'}>Shop Left sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/shopRightsidebar'}>Shop Right sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/shopFullWidthsidebar'}>Full Width sidebar</Link></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Products" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/productLeftsidebar'}>Product Left sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/productRightsidebar'}>Product Right sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/productFullWidth'}>Product Full Width</Link></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/about'}>About Us</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1"><Link to={'contactUs'}>Contact US</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><Link to={'/cart'}>Cart</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/checkout'}>Checkout</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/trackOrder'}>Track Order</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/wishlist'}>Wishlist</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/faq'}>Faq</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/loginForm'}>Login</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/registerForm'}>Register</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/policy'}>Policy</Link></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Blog" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/leftSidebar'}>Left Sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><Link to={'/rightSidebar'}>Right Sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/fullWidth'}>Full Width</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/detailLeftSidebar'}>Detail Left Sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/detailRightSidebar'}>Detail Right Sidebar</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3"><Link to={'/detailFullWidth'}>Detail Full Width</Link></NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Elements" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><Link to={'/products'}>Products</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Typography</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Buttons</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <div className=" ms-5 ">
                                <span>
                                    <IoCallOutline className='me-3' />
                                    +123 ( 456 ) ( 7890 )
                                </span>
                            </div>
                        </Navbar.Collapse>
                        {/* HEADER END  */}
                    </Navbar>
                </div>
            </Container >
        </>
    );
}

export default Header2;