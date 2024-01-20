import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background-color: DodgerBlue;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: snow;
  font-size: 20px;
`;

export const FormInput = styled.input`
  outline: none;
  border: none;
  background-color: snow;
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 16px;
  color: Navy;
  transition: transform 150ms ease-in-out 150ms;
  &:focus {
    transform: translateX(8px);
  }
`;

export const Button = styled.button`
  display: block;
  width: 100px;
  padding: 4px;
  border-radius: 12px;
  background-color: MidnightBlue;
  color: snow;
  transition: all 150ms ease-in-out 150ms;
  &:hover {
    background-color: snow;
    color: MidnightBlue;
  }
`;
