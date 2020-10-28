import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();
  const nextPage = (page) => {
    navigate("/"+page);
  }
  return (
    <div style={{
        backgroundImage:"url("+"https://miro.medium.com/max/2500/1*BeXazxIfTNb3vSv-Mcwz1A.png"+")",
        height:"100vh",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }}>
        <div class="card1" onClick={()=>{nextPage("Number1")}}>
            <h3>1. Basic Computing</h3>
        </div>
        <div class="card2" onClick={()=>{nextPage("Number2")}} >
            <h3>2. Linear Equations</h3>
        </div>
        <br/>
        <div class="card1" onClick={()=>{nextPage("Number3")}} >
            <h3>3. Interpolation</h3>
        </div>
        <br/>
        <div class="card2" onClick={()=>{nextPage("Number4")}} >
            <h3>4. Differentiation</h3>
        </div>
        <br/>
        <div class="card1" onClick={()=>{nextPage("Number5")}} >
            <h3>5. Integration</h3>
        </div>
        <br/>
        <div class="card2" onClick={()=>{nextPage("Number6")}} >
            <h3>6. Root-finding</h3>
        </div>
    </div>
  );
}

export default Main;