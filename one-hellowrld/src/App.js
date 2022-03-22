import React from "react";
import"./style.css";
import Button from "./Button";
const App = () => {
    return (
        <div>
    <h1 style={{ textAlign :"Center"}}>hello guys</h1>
    <Button title= "App store"/>
        <Button title="Play Store"/> 
        <Button title="yo yo"/>
        
    {/* <button className="button">App Store</button> */}
   {/* <button className="button">PLay Store</button> */}
   </div>
    );
};

export default App;