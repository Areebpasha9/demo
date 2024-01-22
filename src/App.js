import React from 'react';
import './App.css';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Home from './Home';
import Header from './Header';
import Course from './component/course';
import Allcourses from './component/Allcourses';
import Addcourse from './component/Addcourse';
import Menus from './component/Menus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/About';
import updatecourse from './component/updatecourse';

function App() {
const btnHandle= () =>{
toast("this is my first Message" ,{position:'bottom-center'});
};

  return (
    <div className="App">
   <Router>
   <ToastContainer/>
   <Container>
     <Header/>
     <Row>
       <Col md={4}>
         <Menus/>
        <h2>This is meneu side</h2>
         </Col>
     <Col md={8}>
      <Card>
        <CardBody>
      <Routes>
      <Route path="/"  Component={Home} exact/>
      <Route path="/add-courses" Component={Addcourse}/>
      <Route path="/view-courses" Component={Allcourses} exact/> 
      <Route path='/about' Component={About}/>    
    <Route path="/view-courses/updatecourse"  element={updatecourse} />
      </Routes>
      </CardBody>
      </Card>
     </Col>
     </Row>
   </Container>
   </Router>
   
      </div>
  );
}

export default App;
