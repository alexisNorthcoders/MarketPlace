import Button from "react-bootstrap/Button";

export default function Header({
  username,
  avatar,
  isLoggedIn,
  setIsLoggedIn,
  setMainBody,
}) {
  return (
    <header>
      <h1>Welcome</h1>

      {isLoggedIn ? (
        <>
          <h1 id="username">{username}</h1>
          <div id="header-button">
          <img className="avatar" src={avatar}></img>
          <Button className="g-1"variant="info"
            onClick={() => {
              setMainBody("itemlist");
              setIsLoggedIn(false);
            }}
          >
            logout
          </Button></div>
        </>
      ) : null}
    </header>
  );
}
