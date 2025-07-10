import { useState } from "react";
import './MainPage.css'

function MainPage(){
   //useState ka use karnege kyon ki value jo bhi chnage ho vo dikhe ---->
     
   const [ count ,setCount]=useState(0);
   //useState ko 0 se intialize kar diya

   function decreaseHandler(){
         setCount(count -1);
   };

   function increaseHandler(){
       setCount(count + 1);
   };

   function restHandler(){
        setCount(0);
   }


    return(
        <div className="main">
            <h2 className="heading">
                Counter-APP
            </h2>
            <div className="container">
            <div className="decrease">
                <button onClick={decreaseHandler}>-</button>
            </div>
            <div className="show">
                <p>{count}</p>
            </div>
            <div className="increase">
                <button onClick={increaseHandler}>+</button>
            </div>
            </div>
              <div className="rest">
                <button onClick={restHandler}>rest</button>
              </div>
        </div>
    )
};

export default MainPage;