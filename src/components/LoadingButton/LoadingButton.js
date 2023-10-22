import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingButton = ({ isLoading, children, ...otherProps }) => {

  return (
    <Button
      variant="contained"
      type="submit"
      disabled={isLoading} //如果 isLoading 为 true，按钮会被禁用。
      {...otherProps}
    >
      {isLoading ? <CircularProgress size={24} /> : children}
    </Button>
  );

};

export default LoadingButton;



// Material-UI for styling