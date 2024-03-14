import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import NavigationBar from "./Navigation Bar/NavigationBar";
import SearchBar from "./SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Manager from "./MainBody/Manager";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [avatar, setAvatar] = useState(
    "https://img-getpocket.cdn.mozilla.net/202x101/filters:format(jpeg):quality(60):no_upscale():strip_exif()/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fpocket-curatedcorpusapi-prod-images%2F9ee264bb-da9b-4d08-81d1-5437e84b93dc.jpeg"
  );
  const [username, setUsername] = useState("fakeUsername");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [itemSearch, setItemSearch] = useState();
  const [itemList, setItemList] = useState([]);
  const [mainBody, setMainBody] = useState("itemlist");

  return (
    <main>
      <Header
        className="header"
        avatar={avatar}
        username={username}
        isLoggedIn={isLoggedIn}
        setMainBody={setMainBody}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Container fluid><Row>
        <Col xs={2} sm={2}>
          
            <nav>
              <NavigationBar
                className="navigation"
                setMainBody={setMainBody}
                isLoggedIn={isLoggedIn}
              />
            </nav>
          
        </Col>
        <Col lg={true} >
          <Row>
            <search id="searchbar">
              <SearchBar
                
                setMainBody={setMainBody}
                itemSearch={itemSearch}
                setItemList={setItemList}
              />
            </search>
          </Row>
          <Row>
            <section id="manager">
              <Manager
                itemList={itemList}
                mainBody={mainBody}
                username={username}
                setUsername={setUsername}
                setMainBody={setMainBody}
                setAvatar={setAvatar}
                setIsLoggedIn={setIsLoggedIn}
                avatar={avatar}
              />
            </section>
          </Row>
        </Col></Row>
      </Container>
    </main>
  );
}

export default App;
