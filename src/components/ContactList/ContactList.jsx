import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectSearchString } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchString = useSelector(selectSearchString);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchString.toLowerCase().trim())
  );
  return (
    <div className={s.wrap}>
      {filteredData.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};

export default ContactList;
