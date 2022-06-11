import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { handleChange } from '../util/firebase';

const EditModal = (props) => {
  const [issueId, setIssueId] = useState(props.IssueId);
  const [issueDate, setIssueDate] = useState(props.IssueDate);
  const [issueThumb, setIssueThumb] = useState(props.IssueThumb);
  const [issuePdf, setIssuePdf] = useState(props.IssuePdf);
  const [issueDetail, setIssueDetail] = useState(props.IssueDetail);
  const [isDelete, setIsDelete] = useState(props.IsDelete);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      handleChange(props.id, { issueId, issueDate, issueThumb, issuePdf, issueDetail, isDelete });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal show={props.show} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header>
        <Modal.Title id='contained-modal-title-vcenter'>Edit Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Form onSubmit={handleSubmit} className='p-3'>
            <Form.Group as={Row} className='mb-3' controlId='IssueId'>
              <Form.Label column sm={2}>
                IssueId
              </Form.Label>
              <Col sm={10}>
                <Form.Control required type='text' placeholder='IssueId' onChange={(e) => setIssueId(e.target.value)} value={issueId} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3' controlId='IssueDate'>
              <Form.Label column sm={2}>
                IssueDate
              </Form.Label>
              <Col sm={10}>
                <Form.Control required={true} type='text' placeholder='IssueDate' onChange={(e) => setIssueDate(e.target.value)} value={issueDate} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3' controlId='IssueThumb'>
              <Form.Label column sm={2}>
                IssueThumb
              </Form.Label>
              <Col sm={10}>
                <Form.Control required type='text' placeholder='IssueThumb' onChange={(e) => setIssueThumb(e.target.value)} value={issueThumb} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3' controlId='IssuePdf'>
              <Form.Label column sm={2}>
                IssuePdf
              </Form.Label>
              <Col sm={10}>
                <Form.Control required type='text' placeholder='IssuePdf' onChange={(e) => setIssuePdf(e.target.value)} value={issuePdf} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3' controlId='IssueDetail'>
              <Form.Label column sm={2}>
                IssueDetail
              </Form.Label>
              <Col sm={10}>
                <Form.Control required type='text' placeholder='IssueDetail' onChange={(e) => setIssueDetail(e.target.value)} value={issueDetail} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-3' controlId='IsDelete'>
              <Form.Label column sm={2}>
                IsDelete
              </Form.Label>
              <Col sm={10}>
                <Form.Select required aria-label='select' onChange={(e) => setIsDelete(e.target.value)} value={isDelete}>
                  <option> </option>
                  <option value='true'>true</option>
                  <option value='false'>false</option>
                </Form.Select>
              </Col>
            </Form.Group>

            <Button onClick={props.onHide} variant='primary' type='submit' className='mt-2'>
              Update
            </Button>
          </Form>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
