import ItemList from "./ItemList";
import SellItem from "./Sell";
import Login from "./Login"
import  {Profile}  from "./Profile";
import Basket from "./Basket";


export default function Manager({ itemList, mainBody, username,setUsername,setMainBody, setAvatar,setIsLoggedIn,avatar}) {
 
  if (mainBody === "sell") {
    return <SellItem />;
  } else if (mainBody === "itemlist") {
    return <section id="itemlist"><ItemList username={username} itemList={itemList} /></section>;
  } else if (mainBody === "login") {
    return <Login setUsername={setUsername} setMainBody={setMainBody} setAvatar={setAvatar} setIsLoggedIn={setIsLoggedIn}/>
  } else if (mainBody === 'profile'){
    return <Profile username={username} avatar={avatar}/>
  } else if(mainBody ==='basket'){
    return <section id="basket"><Basket username={username}/></section>
  }
}
