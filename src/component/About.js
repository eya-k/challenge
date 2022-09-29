import React from "react";
import '../App.css';
import JohnDoe from './John-Doe.jpg';
function About(){
    return(
<div id="about-me">
<h1>
        Hello, my name is
        <span className="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      <img className="avatar" src={JohnDoe}  alt="" />
</div>
    )
}
export default About