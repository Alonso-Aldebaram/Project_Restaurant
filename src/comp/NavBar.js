import React, { useState } from 'react';
import { Row, 
        Col,
        Collapse, 
        Navbar, 
        NavbarToggler, 
        NavbarBrand, 
        Nav, 
        NavItem, 
        NavLink, 
        Button, 
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter, 
        Card, 
        CardImg, 
        CardBody, 
        CardTitle, 
        CardSubtitle } from 'reactstrap'
import logo from '../img/Diente_Fino_Logo.png'
import tiramisu from '../img/Tiramisu.jpg'
import pay from '../img/Cotton-cheesecake.jpg'
import pavlova from '../img/Pavlova.jpg'

const Menu = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    
    const toggleNavbar = () => setCollapsed(!collapsed);

    const {
        className
      } = props;
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto"><img className="logo" src={logo}/></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="#" onClick={toggle}>Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <div>
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Menu</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                            <Card>
                                <CardImg top width="100%" src={tiramisu} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Tiramisu</CardTitle>
                                <CardSubtitle>$35.00</CardSubtitle>
                                <Button>Pedir</Button>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col>
                            <Card>
                                <CardImg top width="100%" src={pay} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Pay de Queso</CardTitle>
                                <CardSubtitle>$45.00</CardSubtitle>
                                <Button>Pedir</Button>
                                </CardBody>
                            </Card>
                            </Col>
                            <Col>
                            <Card>
                            <CardImg top width="100%" src={pavlova} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Pavlova</CardTitle>
                                <CardSubtitle>25.00</CardSubtitle>
                                <Button>Pedir</Button>
                                </CardBody>
                            </Card>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={toggle}>Cerrar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
}

export default Menu;