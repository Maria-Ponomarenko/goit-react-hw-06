import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import { HiUser, HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.box}>
      <div>
        <p className={css.text}>
          <HiUser className={css.icon} />
          {name}
        </p>
        <p>
          <HiPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
