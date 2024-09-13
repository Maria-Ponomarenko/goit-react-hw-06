import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.box}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
}
