import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import AuthContext from '../store/store';

const NavigationBar = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Patrika</Navbar.Brand>
          <Nav className='justify-content-end'>
            {/* <Nav.Link to='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link> */}
            <Nav.Link as={Button} variant='danger' className='m-1' onClick={() => onLogout()}>
              logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
