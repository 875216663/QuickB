import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingButton = ({ isLoading, children, ...otherProps }) => {
  return (
    <Button
      variant="contained"
      type="submit"
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <CircularProgress size={24} /> : children}
    </Button>
  );
};

export default LoadingButton;



// Material-UI for styling