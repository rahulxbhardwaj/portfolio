// basic react function with default export
import React from 'react';
import '../styles/card.scss';


export default function Card() {
    return (
<>

  <div class="cards">
      <div class="card red">
        <i class="fa-brands fa-html5 fa-bounce ic">      <i class="fa-brands fa-css3-alt fa-bounce ic"> </i>    &nbsp;   <i class="fa-brands fa-js"></i> </i>
      
          <p class="tip">HTML + CSS + JAVASCRIPT</p>
          <p class="second-text">FrontEnd Basic</p>
      </div>
      <div class="card blue">
        <i class="fa-brands fa-node-js ic" > &nbsp;    <i class="fa-solid fa-e"></i>    <i class="fa-brands fa-react fa-spin ic"></i>    <i class="fa-solid fa-database ic"></i>      </i>
       
          <p class="tip">MERN STACK</p>
          <p class="second-text">Node.JS,Express.Js,React.Js,MongoDb</p>
      </div>
      <div class="card green">
        <i class="fa-brands fa-java fa-shake ic"></i>
          <p class="tip"> &nbsp;DSA</p>
          <p class="second-text">Data Structures and Alogrithm</p>
      </div>
  </div>

</>
      
    )
}