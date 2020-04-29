import React, {useState} from "react";
import Tweet from "./Tweet";


function App() {
    const [users, setUsers] = useState([
      { name:"John Snow", message:"Winter is Coming" },
      { name:"Mike Ross", message:"Hey there!!"},
      { name:"Rachel Green", message:"We were on a break!"},
      { name:"Monica Geller", message:"I knowwwww.."}
    ]);

    return (
    <div className = "app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );  
}

export default App;