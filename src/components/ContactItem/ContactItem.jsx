import React from 'react';
import styles from './ContactItem.module.css';

export const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <span className={styles.name}>
      {contact.name}: {contact.phone}
    </span>
    <button
      type="button"
      onClick={() => onDeleteContact(contact.id)}
      className={styles.button}
    >
      Delete
    </button>
  </li>
);
