import '../styles/contactPage.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function ContactPage() {

    return (
        <div className='wrapper'>
            <h1>How to contact me</h1>
            <h4>Complete this form, or use any of the other methods below!</h4>
            <div className='content'>
                <div className='form-section'>
                <Form>
                    <Form.Group className="mb-3" controlId="formContactEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formContactSubject">
                        <Form.Label>Subject Line</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formContactBody">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant='primary' type='submit' style={{borderColor: '#0D1B2A', backgroundColor: '#0D1B2A'}}>
                        Submit
                    </Button>
                </Form>
                </div>
                <div className='other-contact'>
                    <h1>Other contact</h1>
                    <div className='contact-info'>
                        <h4>Phone:</h4>
                        <p>+61 412 345 678</p>
                    </div>
                    <div className='contact-info'>
                        <h4>Email:</h4>
                        <a href='mailto:14582@coderacademy.edu.au'>14582@coderacademy.edu.au</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
