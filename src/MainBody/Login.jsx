import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUser, fetchUsers } from "../util/api";
import { useState } from "react";

export default function Login({
  setMainBody,
  setUsername,
  setAvatar,
  setIsLoggedIn,
}) {
  const [isRegisterClicked, setIsRegisteClicked] = useState(false);

  function handleLoginSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    fetchUsers(username)
      .then(({ data }) => {
        setIsLoggedIn(true);
        window.alert(`Welcome ${username}, you have successfully logged in !`);
        event.target.reset();
        setUsername(username);
        setAvatar(data.user.avatar_url);
        setMainBody("itemlist");
      })
      .catch(({ message }) => {
        console.log("error:");
        window.alert(`${message}`);
      });
  }

  function handleRegisterShowHideForm(event) {
    event.preventDefault();
    setIsRegisteClicked((currentState) => {
      return !currentState;
    });
  }
  function handleRegisterSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const avatar_url = event.target[2].value;
    createUser(username, avatar_url)
      .then(({ data }) => {
        console.log(data);
        window.alert(
          `Welcome ${username}, you have successfully register, redirecting you to home page...`
        );
        setIsLoggedIn(true);
        setUsername(username);
        setAvatar(avatar_url);
        setMainBody("itemlist");
      })
      .catch(({ msg }) => {
        window.alert(`${msg}`);
      });
  }
  return (
    <>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3" controlId="usernameInput">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter your Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Button onClick={handleRegisterShowHideForm}>
        Show/Hide Register Form
      </Button>
      {isRegisterClicked ? (
        <>
          <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="newUserUsernameInput">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter your Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="newUserPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*****" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="avatar_url">
              <Form.Label>Avatar Url</Form.Label>
              <Form.Control type="url" placeholder="www.exampleimage.jpeg" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </>
      ) : null}
    </>
  );
}
