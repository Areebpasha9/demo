import React, { useEffect } from "react";
import { Button } from "reactstrap";

const Home = () =>{
useEffect(()=>{
    document.title=("Home");
},[]);

    return(
        <div className="outer" >
    <h2 >
        I am Mohammad Areeb
    </h2>
    <p>
        This is developed by Mohammad Areeb for learning purpose its 
        backend is on Spring Boot and frontend is on React js.<br/>
        Hope this course will help you the coe concepts of React
    </p>
<Button color="primary" outline  >Get Started</Button>
        </div>
    )};
export default Home;