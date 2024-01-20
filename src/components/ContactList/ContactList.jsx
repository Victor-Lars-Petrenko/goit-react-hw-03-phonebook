import { List } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ items, onClick }) => {
  return (
    <List>
      {items.map(item => {
        return <ContactListItem onClick={onClick} key={item.id} item={item} />;
      })}
    </List>
  );
};
