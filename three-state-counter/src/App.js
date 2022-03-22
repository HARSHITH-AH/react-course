import react,{useState} from "react";
import "./App.css";

 function App(){
const[count ,setCount]= useState( 0)


   return(
    <div className="App">
      <header>
        <h1 style={{backgroundcolor:"blue"}}>
          counter app using state 
        </h1>
      </header>
      <h2>current value of count is {count}</h2>
      <button onClick={()=> setCount(0)}>
        Reset Counter</button>
      <button onClick={()=> count > 10 ? "" :setCount(count+1)}>
        increase counter</button>
      <button onClick={()=> count<=0 ? "":setCount(count-1)}>
        decrease Counter</button>
      </div>
   );
 };
export default App;