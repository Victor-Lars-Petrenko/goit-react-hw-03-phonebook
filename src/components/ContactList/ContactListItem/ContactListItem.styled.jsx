import styled from '@emotion/styled';

export const Item = styled.li`
  background-color: paleturquoise;
  border-radius: 4px;
  color: MidnightBlue;
  padding: 4px 24px 8px 24px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  width: 100px;
  display: block;
  margin-top: 8px;
  padding: 4px;
  border-radius: 12px;
  background-color: MidnightBlue;
  color: snow;
  opacity: 0.9;
  transition: all 150ms ease-in-out 150ms;
  &:hover {
    background-color: snow;
    color: MidnightBlue;
  }
`;
