import axios from "axios";
import React, { Fragment, useEffect, UseState } from "react";
import { toast } from "react-toastify";
import {Form,Input, FormGroup, Container, Button } from "reactstrap";
import base_url from "./api/bootapi";



const updatecourse=()=>{
alert("updated");
    // useEffect(()=>{
    //     document.title=("Update Course");
    // },[]);
    
    const [course,setCourses] =UseState({});

    const handleForm=(e)=>{
        console.log(course)
        postDataToServer(course);
        e.preventDefault();
        }
        const postDataToServer=(data)=>{
            axios.post(`${base_url}/api/v1/courses`,data).then(
                (Response)=>{
               console.log(Response);
               toast.success("Record added Successfully!!")
                },  
                (error)=>{
            console.log(error);
            toast.error("Failed to Add")
                }
                
            );
            };
                    


    return(
    //     <Fragment>
    //         <h1 className="text-center my-4">Fill Updated Details</h1>
    //     <Form style={{margin:30}} onSubmit={handleForm}>
    //         <FormGroup>
    //             <label for="userId">
    //                 Course Id
    //             </label>
    //             <Input type="text" placeholder="EnterHere" 
    //             id="userId" name="userId"
    //             onChange={(e)=>{
    //                 setCourses({...course,id:e.target.value});
    //             }}
    //             required    />
    
    //         </FormGroup>
    //         <FormGroup>
    //      <label for="title">
    //          Course Title
    //      </label>
    //      <Input type="text" placeholder="EnterHere"
    //      id="title" name=""
    //      onChange={(e)=>{
    //         setCourses({...course,title:e.target.value});
    //      }}
    //       required />
    //  </FormGroup>
    //  <FormGroup >
    //      <label for="description">
    //          Course Description
    //      </label>
    //      <Input type="textarea" placeholder="Enter Description Here"
    //      id="description" name="userId" style={{height:120}} 
    //      onChange={(e)=>{
    //      setCourses({...course, description:e.target.value});
    //      }}
    //      required />
    //  </FormGroup>
    // <Container>
    //      <Button   type="submit" color="success">Update Course</Button>
    //      <Button  type="reset" color="warning">Clear</Button>
    // </Container>
    
    //     </Form>
    
    //     </Fragment>
<div>
    <h1>Azhan</h1>
</div>
    )   
}
export default updatecourse;