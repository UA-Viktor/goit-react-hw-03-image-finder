import React from 'react';
import { Vortex } from 'react-loader-spinner';

import { Button } from './Button.styled';

const ButtonLoadMore = ({ onClick, isLoading }) => (
  <Button type="button" onClick={onClick}>
    {isLoading ? (
      <>
        <Vortex
          visible={true}
          height="20"
          width="20"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
        Loadind...
      </>
    ) : (
      'Load more'
    )}
  </Button>
);

export default ButtonLoadMore;
