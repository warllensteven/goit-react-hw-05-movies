import React from 'react';
import ContactDelete from './ContactDelete';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactDelete key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
