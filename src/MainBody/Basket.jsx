import { useEffect,useState } from "react";
import {
  addUserOrder,
  fetchUserBasket,
  removeItemFromBasket,
} from "../util/api";
import Button from "react-bootstrap/Button";

export default function Basket({ username }) {
  const [basketList, setBasketList] = useState([]); 

  useEffect(() => {
    fetchUserBasket(username).then(({ data }) => {
      setBasketList(data.items);
    });
  }, []);
  function handleRemoveClick(event) {
    const item_id = event.target.value;

    event.preventDefault();
    removeItemFromBasket(username, item_id).then(() => {
      fetchUserBasket(username).then(({ data }) => {
        setBasketList(data.items);
      });
    });
  }
  function handleCheckoutButton() {
    const postCallsArray = [];
    basketList.forEach((item) => {
      postCallsArray.push(addUserOrder(username, item.item_id));
    });

    Promise.all(postCallsArray).then((res) => {
      const deleteCallsArray = [];
      const uniqueIds = [...new Set(basketList.map((item) => item.item_id))];

      uniqueIds.forEach((item_id) => {
        deleteCallsArray.push(removeItemFromBasket(username, item_id));
      });

      Promise.all(deleteCallsArray).then(() => {
        fetchUserBasket(username).then(({ data }) => {
          setBasketList(data.items);
        });
        window.alert(`Total items ordered: ${basketList.length}`);
      });
    });
  }
  return (
    <>
      <h1>{username} Basket</h1>

      <ol>
        {basketList.map((item, index) => {
          return (
           
              <li id="basketitem" key={`${Date.now()}+${index + item.item_name}`}>
                <h4>{item.item_name}</h4>
                <p>
                  Price: <strong>£{item.price}</strong>
                </p>
                <button
                  key={`${Date.now()}`}
                  className="remove"
                  value={item.item_id}
                  onClick={handleRemoveClick}
                  aria-label="remove item from basket"
                >X</button>
              </li>
       
          );
        })}
      </ol>

      <Button className='mb-1' variant="success" onClick={handleCheckoutButton}>
        Checkout
      </Button>
    </>
  );
}
