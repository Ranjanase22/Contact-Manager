import React, { useState, useEffect } from 'react';

const AddContactForm = ({ addContact, contactToEdit, updateContact }) => {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]);

  const validate = () => {
    let valid = true;
    let errors = { name: '', email: '', phone: '' };

    if (!contact.name.trim()) {
      errors.name = 'Please enter a name.';
      valid = false;
    } else if (/\d/.test(contact.name)) {
      errors.name = 'Name cannot contain numbers.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      errors.email = 'Please enter a valid email address.';
      valid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(contact.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      if (/^\d{0,10}$/.test(value)) {
        setContact({ ...contact, [name]: value });
      }
    } else {
      setContact({ ...contact, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (contactToEdit) {
        updateContact(contact);
      } else {
        addContact(contact);
      }
      setContact({ name: '', email: '', phone: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{contactToEdit ? 'Edit Contact' : 'Add Contact'}</h2>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>

      <button type="submit">{contactToEdit ? 'Update Contact' : 'Add Contact'}</button>
    </form>
  );
};

export default AddContactForm;
