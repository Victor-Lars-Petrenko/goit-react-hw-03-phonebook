import { nanoid } from 'nanoid';
import { Wrapper, Label, FilterInput } from './Filter.styled';

const filterId = nanoid();

export const Filter = ({ onChange, filter }) => {
  return (
    <Wrapper>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <FilterInput
        onChange={onChange}
        id={filterId}
        type="text"
        name="filter"
        value={filter}
      />
    </Wrapper>
  );
};
