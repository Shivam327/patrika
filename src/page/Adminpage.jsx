import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import AuthContext from '../store/store';

const AdminPage = () => {
  const { onLogin } = useContext(AuthContext);
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('Admin@123');

  const login = (e) => {
    e.preventDefault();
    if (username.length === 0 && password.length === 0) {
      alert('Please Enter Username & Password');
    } else {
      onLogin(username, password);
    }
  };
  return (
    <Container fluid>
      <Row style={{ textAlign: 'center', margin: '1.5rem', color: 'red' }}>
        <h1>Patrika Login</h1>
      </Row>
      <Row>
        <Col></Col>
        <Col xl={6}>
          <Form onSubmit={login} className='border border-3 border-primary m-5 p-5'>
            <Form.Group className='mb-3' controlId='formEmail'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                type='text'
                placeholder='userId'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type='password'
                placeholder='Password'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
