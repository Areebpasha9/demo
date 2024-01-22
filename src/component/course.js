import axios from "axios";
import React from "react";
import Allcourses from "./Allcourses";
import { useNavigate , BrowserRouter as Router, Routes, Route} from "react-router-dom";
import updatecourse from "./updatecourse"; 
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container} from "reactstrap";
import base_url from "./api/bootapi";
import { toast } from "react-toastify";

// const navigate = ;


const Course = ({course,update}) => {
   
         const navigate = useNavigate();
   
         const deleteCourse=(id)=>{
        axios.delete(`${base_url}/api/v1/courses/${id}`).then(
            (Response)=>{
                toast.success("Record Deleted Successfully");
                update(id);
            },
            (error)=>{
                toast.error("Failed to Delete!!");
            });
   }

return(
<Card>
   <CardBody>
   <CardSubtitle>{course.title}</CardSubtitle>
   <CardText>{course.description}</CardText>
   <Container className=" btn text-center">
    <Button color="danger"  onClick={()=>{
        deleteCourse(course.id);
    }} outline>Delete</Button>

    <Button color="warning" outline  
     onClick={()=>navigate('updatecourse')}  >Update</Button>
   </Container>
   
   </CardBody>

</Card>
);
    }; 

    export default Course;