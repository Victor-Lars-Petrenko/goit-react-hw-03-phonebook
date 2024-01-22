import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: DodgerBlue;
  padding: 24px;
  border-radius: 4px;
`;

export const Label = styled.label`
  color: snow;
`;

export const FilterInput = styled.input`
  outline: none;
  border: none;
  background-color: snow;
  border-radius: 12px;
  padding: 4px 12px;
  margin-top: 8px;
  font-size: 16px;
  color: Navy;
  transition: transform 150ms ease-in-out 150ms;
  &:focus {
    transform: translateX(8px);
  }
`;
