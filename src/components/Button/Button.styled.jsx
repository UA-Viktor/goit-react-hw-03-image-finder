import styled from '@emotion/styled';

export const Icon = styled.div`
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 12px;
  background-color: #55969e;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;

  margin-left: auto;
  margin-right: auto;

  color: #fffbf4;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #7cb5a1;
  }
  &:focus {
    background-color: #7cb5a1;
  }
`;
