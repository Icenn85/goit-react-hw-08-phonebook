import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import SearchFilter from './SearchFilter/SearchFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectContacts } from '../redux/selectors';
import css from './App.module.css';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const [contacts, setContacts] = useState(() => {
  //   return localStorage.getItem('contacts')
  //     ? JSON.parse(localStorage.getItem('contacts'))
  //     : [
  //         { id: 'id-111', name: 'Rosie Simpson', number: '459-12-56' },
  //         { id: 'id-211', name: 'Hermione Kline', number: '443-89-12' },
  //         { id: 'id-311', name: 'Eden Clements', number: '645-17-79' },
  //         { id: 'id-411', name: 'Annie Copeland', number: '227-91-26' },
  //       ];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onAddContacts = (name, number) => {
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const isContact = contacts.find(
  //     contact => contact.name === name.toLowerCase()
  //   );
  //   if (isContact) {
  //     alert(`${name} is already in contact`);
  //     return;
  //   }

  //   setContacts([newContact, ...contacts]);
  // };

  //   const changeFilter = (evt) => {
  //     setFilter(evt.currentTarget.value);
  //   };

  //   const onDeleteContacts = (contactId) => {
  //     setContacts(
  //     contacts.filter((contact) => contact.id !== contactId));
  // };

  // const getVisibleContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 && <p>Add your first contact</p>}
      {contacts.length > 0 && <SearchFilter />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
