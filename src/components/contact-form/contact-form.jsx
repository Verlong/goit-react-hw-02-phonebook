import React from 'react';
import css from './contact-form.module.css';

class ContactForm extends React.Component {
  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = form.elements.login.value;
    console.log(contactName);
    this.props.onSubmit({ contactName });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="contactName" for="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <button type="submit" className="addContactBtn">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
