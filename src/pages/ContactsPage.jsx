import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  AddContactForm  from '../components/AddContactForm/AddContactForm';
import  SearchFilter  from '../components/SearchFilter/SearchFilter';
import  ContactList  from '../components/ContactList/ContactList';
import { Typography, Box } from '@mui/material';
import { fetchContacts } from '../redux/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <AddContactForm />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#fff"
        paddingBottom="250px"
      >
        <Typography component="h2" variant="h4" color="#210B61">
          Contacts
        </Typography>
        <SearchFilter />
        <ContactList />
      </Box>
    </>
  );
};

export default ContactsPage;