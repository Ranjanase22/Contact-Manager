import React from 'react';
import './ContactList.css'; // Import the CSS styles for the table

const ContactList = ({ contacts, deleteContact, editContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No contacts available</td>
            </tr>
          ) : (
            contacts.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  <button onClick={() => editContact(index)} title="Edit">
                    &#9998; {/* Unicode for a pen symbol */}
                  </button>
                  <button onClick={() => deleteContact(index)} title="Delete">
                  &#128465; {/* Unicode for a trash symbol */}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
