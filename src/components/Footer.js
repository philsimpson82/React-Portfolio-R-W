import { Container, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='service'>Services</Link>
                            </li>
                            <li>
                                <Link to='gifts'>Gifts</Link>
                            </li>
                            <li>
                                <Link to='about'>About</Link>
                            </li>
                            <li>
                                <Link to='contact'>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <h5>
                            <a className='btn btn-social-icon btn-facebook' href='http://facebook.com'>
                                <i className='fa fa-facebook' />
                            </a>{' '}
                            <a className='btn btn-social-icon btn-instagram' href='http://instagram.com'>
                                <i className='fa fa-instagram' />
                            </a>
                        </h5>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a role='button' className='btn btn-link' href='tel:+15555555'>
                            <i className='fa fa-phone' /> 1-555-5555
                        </a>
                        <br />
                        <a role='button' className='btn btn-link' href='mailto:restandwellness@generic.com'>
                            <i className='fa fa-envelope-o' /> restandwellness@generic.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;