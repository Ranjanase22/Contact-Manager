import React, { useState } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  const editContact = (index) => {
    setContactToEdit({ ...contacts[index], index });
  };

  const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map((contact, i) =>
      i === updatedContact.index ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setContactToEdit(null);
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>

      {/* Container for side-by-side layout */}
      <div className="app-container">
        <div className="add-contact-section">
          <AddContactForm
            addContact={addContact}
            contactToEdit={contactToEdit}
            updateContact={updateContact}
          />
        </div>

        <div className="contact-list-section">
          <ContactList
            contacts={contacts}
            deleteContact={deleteContact}
            editContact={editContact}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
