import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectLoading } from "../../redux/contactsSlice";
import { selectSearchString } from "../../redux/filtersSlice";

const ContactList = () => {
  const Loading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const searchString = useSelector(selectSearchString);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchString.toLowerCase().trim())
  );
  return (
    <div>
      {Loading && <h1>Loading...</h1>}
      <div className={s.wrap}>
        {filteredData.map((item) => (
          <Contact key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
