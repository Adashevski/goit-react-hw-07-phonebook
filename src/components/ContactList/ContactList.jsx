import React, { useEffect } from 'react';
import styles from './ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContactAsync } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContactAsync(id));
  };

  return contacts.length ? (
    <ul className={styles.list}>
      {contacts.map(el => (
        <ContactItem key={el.id} contact={el} onDeleteContact={handleDelete} />
      ))}
    </ul>
  ) : null;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
