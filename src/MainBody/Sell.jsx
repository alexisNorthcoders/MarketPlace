import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { insertItem } from "../util/api";

export default function SellItem() {

  function handleSubmitItem(event) {
    event.preventDefault();
    const name = event.target[0].value
    const description = event.target[1].value
    const price = event.target[2].value
    const url = event.target[3].value
    const category = event.target[4].value
    insertItem(name, description , price, url, category).then((res)=> {
        window.alert(`${name} item has been listed!`);
        event.target.reset()
      
    })
    .catch(({message})=>{
        
        window.alert(`${message}`);
    })

    
  }

  return (
    <Form onSubmit={handleSubmitItem}>
      <Form.Group className="mb-3" controlId="item_name">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Item name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="img_url">
        <Form.Label>Img URL</Form.Label>
        <Form.Control type="url" placeholder="Img url" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Category" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
