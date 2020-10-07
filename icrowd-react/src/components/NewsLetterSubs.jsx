import React from 'react';
import '../css/footer.css';
import { Form, Col, Button } from 'react-bootstrap';

const NewsLetterSubs = () => {
    return (<div className="footer-newsletter">
        <Form>
            <Form.Row>
                <Col xs="auto">
                    <Form.Label>
                        <h2>NEWSLETTER SIGN</h2>
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control placeholder="Enter Your Email" />
                </Col>
                <Col className="pr-3">
                    <Button variant="primary">Subscribe</Button>
                </Col>
            </Form.Row>
        </Form>
    </div>)
}

export default NewsLetterSubs;