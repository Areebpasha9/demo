import React from "react";
import {Card,CardBody} from 'reactstrap';
function Header({name,title}){
    return (
<div>
    <Card className=" my-2" color="warning">
        <CardBody>
        <h1 className="text-center  mt-1 mb-2">
            Welcome to Courses Application</h1>
        </CardBody>
    </Card>
</div>
    );
}
export default Header;