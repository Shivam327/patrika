import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { getData } from '../util/firebase.js';
import ItemCard from './ItemCard.jsx';

const RenderList = () => {
  const [patrika, setPatrika] = useState([]);

  useEffect(() => {
    getData(setPatrika);

    return () => {
      setPatrika([]);
    };
  }, []);

  return (
    <Row className='order m-1 overflow-scroll' style={{ height: '80vh' }}>
      {patrika.length === 0 && <h2 className='text-center text-secondary'>No Data Found</h2>}
      {patrika.map((entity) => (
        <ItemCard
          key={entity.id}
          IsDelete={entity.data.IsDelete}
          IssueDate={entity.data.IssueDate}
          IssueDetail={entity.data.IssueDetail}
          IssueId={entity.data.IssueId}
          IssuePdf={entity.data.IssuePdf}
          IssueThumb={entity.data.IssueThumb}
          id={entity.id}
        />
      ))}
    </Row>
  );
};

export default RenderList;
