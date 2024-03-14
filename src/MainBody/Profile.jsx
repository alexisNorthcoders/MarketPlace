import { fetchUsers } from "../util/api";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export function Profile({ username, avatar }) {
  const [kudos, setKudos] = useState(0);
  fetchUsers(username).then(({ data }) => {
    
    setKudos(data.user.kudos);
  });

  useEffect(() => {
    fetchUsers(username);
  }, []);
  function handleProfileFormChange(event){
    event.preventDefault();
    //need to read the doc to chekc how to handle this change
  }
  return (
    <>
    <Form onChange={handleProfileFormChange}>
    <Form.Group className="mb-3" controlId="currentUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" defaultValue={username}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="currentImg_url">
              <Form.Label>Avatar URL</Form.Label>
              <Form.Control type="text" defaultValue={avatar} />
            </Form.Group>
    </Form>
      <img src={avatar} width="500px" height="500px"></img>
      <p>Kudos: {kudos}</p>
    </>
    //return child component with basket
  );
}
