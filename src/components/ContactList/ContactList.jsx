import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import s from "./contactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <li className={s.contactItem} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.deleteBtn}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
