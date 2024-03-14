import { useState } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { addUserBasket } from "../util/api";
export default function ItemList({ username, itemList }) {
  const [showDesc, setDesc] = useState(false);

  function handleAddtoBasket(event) {
    console.log(event)
    addUserBasket(username, event.target.value).then((res) => {
      event.target.hidden=true
      window.alert(
        `You have successfully added ${res.data.item.item_name} to your Basket!`
      );
    });
  }
  return (
    <Row xs={2} md={3} lg={4} className="g-4">
      {itemList.map((item, index) => (
        <Col key={`${index}${item.item_name}`}>
          <Card>
            <Card.Img variant="top" src={item.img_url} />
            <Card.Body>
              <Card.Title>{item.item_name}</Card.Title>
              <Card.Text>£{item.price}</Card.Text>

              <Card.Header>
                {" "}
                <button
                  onClick={() => {
                    setDesc((current) => {
                      return !current;
                    });
                  }}
                >
                  Toggle Description
                </button>{" "}
                {showDesc ? item.description : null}
              </Card.Header>
              <Card.Footer>
                <Button
                  value={item.item_id}
                  onClick={handleAddtoBasket}
                  variant="success"
                >
                  Add to Basket
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
