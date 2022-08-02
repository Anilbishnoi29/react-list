import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button,Row } from 'react-bootstrap';


const ListPrint = () => {
    const employees = [
        { Id: 101,Name: 'Abhinav',Location: 'Bangalore',Salary: 12345 },
        { Id: 102,Name: 'Abhishek',Location: 'Chennai',Salary: 23456 },
        { Id: 103,Name: 'Ajay',Location: 'Bangalore',Salary: 34567 }
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp,index) =>
                        <tr key={ index }>
                            <td>{ emp.Id }</td>
                            <td>{ emp.Name }</td>
                            <td>{ emp.Location }</td>
                            <td>{ emp.Salary }</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
};

const List = () => {
    const [isShow,setToggle] = useState(false);
    function showTable() {
        setToggle(true);
    }
    function hideTable() {
        setToggle(false);
    }
    return (
        <>
            <h1>Employees List</h1>
            <Row>
                <div className='col-md-12'>
                    <Button onClick={ () => { showTable(); } }>Show</Button>
                    <Button onClick={ () => { hideTable(); } }>Hide</Button>
                </div>
            </Row>
            { (isShow === true) ? <ListPrint /> : <p>Click on show Button</p> }
        </>
    );
};
export default List;