import React from 'react';
import { Grid } from 'react-loader-spinner';

import { Button, Icon } from './Button.styled';

const ButtonLoadMore = ({ onClick, isLoading }) => (
  <Button type="button" onClick={onClick}>
    {isLoading ? (
      <>
        <Icon>
          <Grid
            height="20"
            width="20"
            color="#fffbf4"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </Icon>
        Loadind...
      </>
    ) : (
      'Load more'
    )}
  </Button>
);

export default ButtonLoadMore;
