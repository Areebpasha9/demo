import React, { useState,useEffect } from "react";
import Course from "./course";
import base_url from "./api/bootapi";
import axios from "axios";
import { Card } from "reactstrap";
import { toast } from "react-toastify";

const Allcourses =() =>{
    
 useEffect(()=> {
    document.title=("All Courses");
 },[]);

//Function to all Server
const getAllCoursesFromServer =()=>{
    axios.get(`${base_url}/api/v1/courses`).then(
        (Response)=>{
    console.log(Response.data);
    setCourses(Response.data);
    toast.success("Uploaded Successfully!")
        
},
        (error)=>{
     console.log(error);
    toast.error("Failed to load from server!!")
    }
    )
};
//calling loading course function
useEffect(()=>{
    getAllCoursesFromServer();
},[]);

 const [courses,setCourses]=useState([]);

 const updateCourses=(id)=>{
setCourses(courses.filter((c)=>c.id!==id));
 }

    return(
<div>
     <h1> All Courses</h1>
     <p>List of all Courses are as Follows</p>
 
       {courses.length>0 ?
        courses.map((item)=>
        <Course key={courses.id} course={item}
            update={updateCourses}  />) : "No Courses"}
 
    </div>
);
};
export default Allcourses;