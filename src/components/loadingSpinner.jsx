import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

const LoadingSpinner = () => (
  <Spinner
    animation="border"
    variant="success"
    style={{
      width: '8rem', height: '8rem', marginRight: '1rem',
    }}
  />
);
export default LoadingSpinner;
