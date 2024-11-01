import { FaPhoneAlt, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <span className={s.wrap}>
          <FaUser />
          {name}
        </span>
        <span className={s.wrap}>
          <FaPhoneAlt />
          {number}
        </span>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
