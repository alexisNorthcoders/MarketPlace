import { useEffect, useState } from "react";
import { fetchItem, fetchItemById, getCategories } from "../util/api";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function SearchBar({ itemSearch, setItemList, setMainBody }) {
  const [userSearchInput, setUserSearchInput] = useState("");
  const [catergories, setCatergories] = useState([]);
  const [userCategory, setUserCategory] = useState("");

  function handleSearchInput(event) {
    setUserSearchInput(event.target.value);
  }
  function fetchAllByDefault() {
    return fetchItem(userCategory).then(({ data: { items } }) => {
      setItemList(items);
      setMainBody("itemlist");
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetchAllByDefault();
  }
  function handleCatDropdown(event) {
    setUserCategory(event.target.value);
  }
  function fetchandUpdateCategory() {
    getCategories().then(({ data: { categories } }) => {
      const catArr = categories.map((element) => {
        return element.category_name;
      });
      setCatergories(catArr);
    });
  }

  useEffect(() => {
    fetchandUpdateCategory();
    fetchAllByDefault();
  }, []);

  return (
    <>
      <Form>
        Search
        <input
          type="text"
          value={userSearchInput}
          onChange={handleSearchInput}
        ></input>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCatDropdown}>
          <option value=""></option>
          {catergories.map((category, index) => {
            
            return (
              <option key={category + index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <Button onClick={handleSubmit}>submit</Button>
      </Form>
    </>
  );
}
