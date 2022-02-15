import { NotificationBootStrap } from 'story-bootstrap';
import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

const DashBoard = props => {
  const [value, setValue] = useState(0);

  const spin = useSelector(state => state.admin.spin);

  useEffect(() => {
    if (spin) {
      setValue(prev => prev + 1);
    }
  }, [spin]);

  console.log('XXXX', value);

  return (
    <>
      <h1>DashBoard</h1>
      <NotificationBootStrap />
    </>
  );
};

export default DashBoard;
