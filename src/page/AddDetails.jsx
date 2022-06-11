import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { db } from '../util/firebase.js';

const AddDetails = () => {
  const [issueId, setIssueId] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [issueThumb, setIssueThumb] = useState('');
  const [issuePdf, setIssuePdf] = useState('');
  const [issueDetail, setIssueDetail] = useState('');
  const [isDelete, setIsDelete] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'IssueMaster'), {
        IssueId: issueId,
        IsDelete: isDelete,
        IssueDate: issueDate,
        IssueDetail: issueDetail,
        IssuePdf: issuePdf,
        IssueThumb: issueThumb,
      });
      successMsg();
    } catch (err) {
      alert(err);
    }
  };

  function successMsg() {
    setIssueId('');
    setIsDelete('');
    setIssueDate('');
    setIssueDetail('');
    setIssuePdf('');
    setIssueThumb('');
  }

  return (
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
          </Form.Label>{' '}
          <Col sm={10}>
            <Form.Control required type='text' placeholder='IssueThumb' onChange={(e) => setIssueThumb(e.target.value)} value={issueThumb} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='IssuePdf'>
          <Form.Label column sm={2}>
            IssuePdf
          </Form.Label>{' '}
          <Col sm={10}>
            <Form.Control required type='text' placeholder='IssuePdf' onChange={(e) => setIssuePdf(e.target.value)} value={issuePdf} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='IssueDetail'>
          <Form.Label column sm={2}>
            IssueDetail
          </Form.Label>{' '}
          <Col sm={10}>
            <Form.Control required type='text' placeholder='IssueDetail' onChange={(e) => setIssueDetail(e.target.value)} value={issueDetail} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='IssueDetail'>
          <Form.Label column sm={2}>
            IsDelete
          </Form.Label>{' '}
          <Col sm={10}>
            <Form.Select required aria-label='select' onChange={(e) => setIsDelete(e.target.value)} value={isDelete}>
              <option> </option>
              <option value='true'>true</option>
              <option value='false'>false</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-2'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddDetails;
