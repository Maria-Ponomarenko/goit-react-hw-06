import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name
      .trim()
      .toLowerCase()
      .includes(filteredName.trim().toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return (
          <li className={css.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
