import { Item, Button } from './ContactListItem.styled';

export const ContactListItem = ({ onClick, item: { id, name, number } }) => {
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button id={id} type="button" onClick={onClick}>
        Delete
      </Button>
    </Item>
  );
};
