import { useState } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { handleDelete } from '../util/firebase';
import EditModal from './EditModal';
const ItemCard = ({ IssueId, IsDelete, IssueDate, IssueDetail, IssuePdf, IssueThumb, id }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card border='info' style={{ width: '100' }} className='my-3'>
      <Row>
        <Col>
          <ListGroup className='my-1'>
            <ListGroup.Item>IssueId: {IssueId}</ListGroup.Item>
            <ListGroup.Item>IssueDetail: {IssueDetail}</ListGroup.Item>
            <ListGroup.Item>IssueDate :{IssueDate}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className='my-1'>
            <ListGroup.Item>IssueThumb: {IssueThumb}</ListGroup.Item>
            <ListGroup.Item>IssuePdf: {IssuePdf}</ListGroup.Item>
            <ListGroup.Item>IsDelete: {IsDelete}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='secondary' className='m-1' onClick={() => setModalShow(true)}>
            Edit
          </Button>
          <Button variant='danger' className='m-1' onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </Col>

        <Col></Col>
      </Row>

      <EditModal
        IsDelete={IsDelete}
        IssueDate={IssueDate}
        IssueDetail={IssueDetail}
        IssueId={IssueId}
        IssuePdf={IssuePdf}
        IssueThumb={IssueThumb}
        id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
};

export default ItemCard;
