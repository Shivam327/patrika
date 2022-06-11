import { Col, Container, Row } from 'react-bootstrap';
import RenderList from '../components/RenderList';
import AddDetails from './AddDetails';

const AddPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col className='m-1 border border-3 border-primary'>
          <AddDetails />
        </Col>
        <Col className='m-1 border border-3 border-primary' xl={7}>
          <RenderList />
        </Col>
      </Row>
    </Container>
  );
};

export default AddPage;
