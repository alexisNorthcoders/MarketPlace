import Button from "react-bootstrap/Button";

export default function NavigationBar({ isLoggedIn, setMainBody }) {
  if (isLoggedIn === true) {
    return (
      <>
        <Button onClick={()=>{
          setMainBody("profile");
        }}>Profile</Button>
        <Button onClick ={()=>{
          setMainBody("basket");
        }}>  Basket</Button>
        <Button onClick={() => {
            setMainBody("sell");
          }}
        >
          Sell
        </Button>
      </>
    );
  } else if (isLoggedIn ===false){
    return (
      <>
        <Button
          className="navBarButton"
          onClick={() => {
            setMainBody("login");
          }}
        >
          login/create
        </Button>
      </>
    );
  }
}
