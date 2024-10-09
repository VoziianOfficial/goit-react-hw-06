import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
